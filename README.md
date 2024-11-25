# Countries Explorer App

This Web App is developing using React, Vite, TypeScript,, and Tailwind CSS.

This App is using Countries GraphQL API for getting data countries info and integrating weather information using a public weather API.

## How to use GraphQL API for countries info

```js
const client = new ApolloClient({
  uri: "https://countries.trevorblades.com",
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
```

## How to use Public Weather API

```js
const fetchWeather = async (capital: string) => {
  const apiKey = ""; // Replace with your OpenWeatherMap API Key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${apiKey}&units=metric`;
  try {
    const response = await axios.get(url);
    setWeather(response.data);
  } catch (err) {
    setError("Error fetching weather data");
  }
};
```

# Result with images

## Dashboard

![Dashboard](./readme%20images/dashboard.png)

## Searching

![Searching](./readme%20images/Searching.png)

## Detail Country Info

![Detail](./readme%20images/DetailCountryInfo.png)

## Deployed URL

[Plz check the live app here.](https://countries-explorer-app.onrender.com/)
