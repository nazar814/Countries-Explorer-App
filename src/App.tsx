// src/App.tsx  
import React from 'react';  
import { ApolloProvider } from '@apollo/client';  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import client from './services/countriesAPI';  
import Home from './pages/Home';  
import CountryPage from './pages/CountryPage';  

const App: React.FC = () => {  
  return (  
    <ApolloProvider client={client}>  
      <Router>  
        <Routes>  
          <Route path="/" element={<Home />} />  
          <Route path="/country/:countryName" element={<CountryPage />} />  
        </Routes>  
      </Router>  
    </ApolloProvider>  
  );  
};  

export default App;