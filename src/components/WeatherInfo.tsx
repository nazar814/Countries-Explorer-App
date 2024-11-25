// src/components/WeatherInfo.tsx  
import React, { useEffect, useState } from 'react';  
import axios from 'axios';  

interface WeatherInfoProps {  
  capital: string;  
}  

const WeatherInfo: React.FC<WeatherInfoProps> = ({ capital }) => {  
  const [weather, setWeather] = useState<any>(null);  
  const [error, setError] = useState<string | null>(null);  

  const fetchWeather = async (capital: string) => {  
    const apiKey = '9c3873ab17e5794d9a7ce377e19fc307'; // Replace with your OpenWeatherMap API Key  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${apiKey}&units=metric`;  
    try {  
      const response = await axios.get(url);  
      setWeather(response.data);  
    } catch (err) {  
      setError('Error fetching weather data');  
    }  
  };  

  useEffect(() => {  
    fetchWeather(capital);  
  }, [capital]);  

  if (error) return <p>{error}</p>;  
  if (!weather) return <p>Loading Weather...</p>;  

  return (  
    <div className='flex justify-center items-center w-full flex-col'>  
      <h3 className='mb-3 text-xl'>Weather in {capital}</h3>  
      <p className='mb-3 text-xl'>Temperature: {weather.main.temp} °C</p>  
      <p className='mb-3 text-xl'>Conditions: {weather.weather[0].description}</p>  
      <img className='mb-3' src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="Weather icon" />  
    </div>  
  );  
};  

export default WeatherInfo;