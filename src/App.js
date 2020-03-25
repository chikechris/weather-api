import React, { useState, useEffect } from 'react';
import Form from './components/form/Form';
import Weather from './components/weather/Weather';

import './App.css';

function App() {
  const [query, setQuery] = useState("Atlanta")
  const [weather, setWeather] = useState({
    city: null,
    temp: null,
    country: null,
    descrip: null,
    humid: null,
  })
  



  const data = async (s) => {
    const apiRes = await fetch(
      // `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=d8aed0cdcc48eed9be637fc927e2db93`
      `https://api.openweathermap.org/data/2.5/weather?q=${s}&APPID=d8aed0cdcc48eed9be637fc927e2db93`
    );
    const resJSON = await apiRes.json();
    console.log(resJSON);
    return resJSON;
  };

const handleChange = (e) =>{
  setQuery(e.target.value)
}
 
 const handleSearch = (e) => {
    e.preventDefault() 
      data(query).then(res => {
        setWeather({
          temp: (Math.round((res.main.temp * 9 / 5) - 459.67)),
        humid: (res.main.humidity),
        descrip: (res.weather[0].description),
        country: (res.sys.country),
        city: (res.name)
        })    
  });
 }

  useEffect(() => {
    data(query).then(res => {
      setWeather({
        temp: (Math.round((res.main.temp * 9 / 5) - 459.67)),
        humid: (res.main.humidity),
        descrip: (res.weather[0].description),
        country: (res.sys.country),
        city: (res.name)
      }) 
    })
  }, [weather])


  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Weather App </h1>
      </header>
      <Form query={query} onChange={handleChange} onClick={handleSearch}/>
      
      <Weather
        temp={weather.temp}
        city={weather.city}
        country={weather.country}
        humid={weather.humid}
        descrip = {weather.descrip}
      
      /> 
    </div>
  );
}
export default App;
