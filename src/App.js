import React, { useState, useEffect } from 'react';
import Form from './components/form/Form';
import Weather from './components/weather/Weather';

import './App.css';

function App() {
  const location = 'Atlanta, US';
  const [query, setQuery] = useState('Atlanta'); 
  const [loading, setLoading] = useState(false)
  const [weather, setWeather] = useState({
    city: null,
    temp: null,
    country: null,
    descrip: null,
    humid: null
  });

  // data fetching function
  const getWeather = async s => {
    setLoading(true)
    const apiRes = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${s}&APPID=d8aed0cdcc48eed9be637fc927e2db93`
    );
    const resJSON = await apiRes.json();
    setWeather({
      temp: Math.round((resJSON.main.temp * 9) / 5 - 459.67),
      humid: resJSON.main.humidity,
      descrip: resJSON.weather[0].description,
      country: resJSON.sys.country,
      city: resJSON.name
    });
    setLoading(false)
  };

  // function handles change form user end
  const handleChange = e => {
    setQuery(e.target.value);
  };

  // function handles search queries from user end
  const handleSearch = e => {
    e.preventDefault();
    getWeather(query);
  };

  useEffect(() => {
    getWeather(location);
  }, [location]);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Weather App </h1>
      </header>
  {!loading? (
    <div> 
        <Form query={query} onChange={handleChange} onClick={handleSearch} />

        <Weather
          temp={weather.temp}
          city={weather.city}
          country={weather.country}
          humid={weather.humid}
            descrip={weather.descrip} />
  </div>
  ):(
    <div style={{color: "blue"}}>Loading</div>
    )}
     
    </div>
  );
}
export default App;
