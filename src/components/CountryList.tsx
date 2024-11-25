// src/components/CountryList.tsx  
import React, { useState } from 'react';  

interface Country {  
  code: string;
  name: string;  
  capital: string;  
  awsRegion: string;  
  flags: {  
    svg: string;  
  };  
}  

interface CountryListProps {  
  countries: Country[];  
  onSelect: (country: Country) => void;  
}  

const CountryList: React.FC<CountryListProps> = ({ countries, onSelect }) => {  
  const [pageNo, setPageNo] = useState<number>(1);  
  const NextPage = () => {
    setPageNo(pageNo >= Math.ceil(countries.length / 5)? pageNo : pageNo + 1);
  }
  const PrevPage = () => {
    setPageNo(pageNo == 1 ? 1 : pageNo - 1);
  }
  return (  
    <div>
      {countries.slice((pageNo - 1) * 5, pageNo * 5).map((country) => (  
        <div key={country.name} onClick={() => onSelect(country)} className='border p-3 cursor-pointer mb-3'>  
          <img src={`https://flagpedia.net/data/flags/h120/${country.code.toLowerCase()}.webp`} alt={`${country.name} flag`} className='w-[50px] h-[30px]' />  
          <h2 className='text-xl'>Name : {country.name}</h2>  
          <p>Capital: {country.capital}</p>  
          <p>Region: {country.awsRegion}</p>  
        </div>  
      ))}  
      <div className='flex justify-between items-center'>
        <button id="prevBtn" onClick={PrevPage} className='border p-3 rounded-md bg-slate-500 text-white'>Prev</button>  
        <span id="pageInfo">Page 
          <input type='number' className='w-[35px] text-center' value={pageNo} onChange={(e: any) => {
            if(e.target.value < 1)  setPageNo(1);
            else if(e.target.value > Math.ceil(countries.length / 5)) setPageNo(Math.ceil(countries.length / 5));
            else setPageNo(e.target.value)
          }}></input> of {Math.ceil(countries.length /  5)}
        </span>  
        <button id="nextBtn" onClick={NextPage} className='border p-3 rounded-md bg-slate-500 text-white'>Next</button>  
      </div>
    </div>  
  );  
};  

export default CountryList;