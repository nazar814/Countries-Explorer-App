// src/pages/CountryPage.tsx  
import React from 'react';  
import { useParams } from 'react-router-dom';  
import { useQuery } from '@apollo/client';  
import { getCountriesQuery } from '../services/countriesAPI';  
import CountryDetails from '../components/CountryDetails';  

const CountryPage: React.FC = () => {  
  const { countryName } = useParams<{ countryName: string }>();  
  const { loading, error, data } = useQuery(getCountriesQuery);  

  if (loading) return <p>Loading...</p>;  
  if (error) return <p>Error: {error.message}</p>;  

  const country = data.countries.find((country: any) => country.name === countryName);  

  return country ? <CountryDetails country={country} /> : <p>Country not found</p>;  
};  

export default CountryPage;