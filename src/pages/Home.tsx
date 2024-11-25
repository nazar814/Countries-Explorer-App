// src/pages/Home.tsx  
import React, { useState } from 'react';  
import { useQuery } from '@apollo/client';  
import { getCountriesQuery } from '../services/countriesAPI';  
import CountryList from '../components/CountryList';  
import SearchBar from '../components/SearchBar';  
import { useNavigate } from 'react-router-dom';  

const Home: React.FC = () => {  
  const { loading, error, data } = useQuery(getCountriesQuery);  
  const [query, setQuery] = useState('');
  const [sortId, setSortId] = useState(0);
  const navigate = useNavigate();  

  if (loading) return <p>Loading...</p>;  
  if (error) return <p>Error: {error.message}</p>;  

  const countries = data.countries.filter((country: any) =>  
    country.name.toLowerCase().includes(query.toLowerCase())  
  );  

  if(sortId == 1){
    countries.sort((a: any, b: any) => {  
        return a.name < b.name ? -1 : 1;  
    });  
  }

  if(sortId == 2){
    countries.sort((a: any, b: any) => {  
        return a.awsRegion < b.awsRegion ? -1 : 1;  
    });  
  }

  return (
    <div className='p-3'>
      <h1 className='text-center text-xl mb-3'>Countries Explorer</h1>
      <SearchBar query={query} setQuery={setQuery} setSortId={setSortId} />
      <CountryList
        countries={countries}
        onSelect={(country) => navigate(`/country/${country.name}`)}
      />
    </div>
  );  
};  

export default Home;