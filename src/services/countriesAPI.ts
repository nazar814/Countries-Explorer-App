// src/services/countriesAPI.ts  
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';  

const client = new ApolloClient({  
  uri: 'https://countries.trevorblades.com',  
  cache: new InMemoryCache(),  
});  

export const getCountriesQuery = gql`  
  query GetCountries {  
    countries {  
        code  
        name  
        capital  
        awsRegion  
        languages {  
            code  
            name  
        }  
    	currencies
    }  
  }  
`;  

export default client;