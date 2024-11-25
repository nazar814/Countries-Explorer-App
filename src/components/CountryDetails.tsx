// src/components/CountryDetails.tsx  
import React, { useEffect, useState } from 'react';  
import { Link } from 'react-router-dom';  
import axios from 'axios';
import WeatherInfo from './WeatherInfo';
import CountryDetailitem from './CountryDetailItem';

interface CountryDetailsProps {  
  country: any;  
}  

const CountryDetails: React.FC<CountryDetailsProps> = ({ country }) => {  
    const [detailInfo, SetDetailInfo] = useState<any>(null);  
    const [error, setError] = useState<string | null>(null);  

    const fetchDetailinfo = async (countryCode: string) => {  
        const url = `https://restcountries.com/v3.1/alpha/${countryCode.toLowerCase()}`;  
        try {  
          const response = await axios.get(url);  
          SetDetailInfo(response.data);  
        } catch (err) {  
          setError('Error fetching weather data');  
        }  
      };
      
      useEffect(() => {  
        fetchDetailinfo(country.code);  
      }, [country.code]); 

  return (  
    <div className='flex justify-around items-between flex-col w-screen h-screen text-center'>  
        <div className='mb-3 flex justify-center items-center'>
            <h1 className='text-3xl mr-5'>{country.name}</h1>  
            <img src={`https://flagpedia.net/data/flags/h120/${country.code.toLowerCase()}.webp`} alt={`${country.name} flag`} className='w-[50px] h-[30px]' />  
      </div>
      <CountryDetailitem title='capital' value={country.capital} />
      <CountryDetailitem title='Region' value={country.awsRegion} />
      <CountryDetailitem title='Languages' value={country.languages.map((lang: any) => lang.name).join(', ')} />

      {detailInfo ?
      <>
        <CountryDetailitem title='Neighbor Countries' value={(detailInfo[0].borders || []).join(', ')} />
        <CountryDetailitem title='Currencies' value={Object.values(detailInfo[0].currencies).map((currency: any) => currency.name).join(', ')} />
        <CountryDetailitem title='Population' value={detailInfo[0].population} />
        <CountryDetailitem title='Timezones' value={detailInfo[0].timezones.join(', ')} />
      </> : <>{error}</>
      }
      <WeatherInfo capital={country.capital} />  
      <Link to="/" className='bg-green-400 py-2 rounded-md text-white mx-3'>Go Back</Link>  
    </div>  
  );  
};  

export default CountryDetails;