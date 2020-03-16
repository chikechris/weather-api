import React, { useState } from 'react';
import Form from './components/Form';
import Weather from './components/Weather';

import './App.css';

function App() {
  const [weather, setWeather] = useState([]);

  async function fetchData(e) {
    e.preventDefault();
    const city = e.target.elements.city.value;
    // const country = e.target.elements.country.value;

    const data = await fetch(
      `http://api.weatherstack.com/current?access_key=2f9fb3f033b30a0bcddb462b5d945ee4&query=${city}`
    )
      // `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=d8aed0cdcc48eed9be637fc927e2db93`)

      .then(res => res.json())
      .then(data => data);
    console.log(data);
    // if(city && country) {
    if (city) {
      setWeather({
        // temperature: Math.round(data.main.temp * 9/5 - 459.67),
        // city: data.name,
        // country: data.sys.country,
        // humidity: data.main.humidity,
        // description: data.weather[0].description,
        // error: ""
        temperature: Math.round((data.current.temperature * 9) / 5 + 32),
        city: data.location.name,
        country: data.location.country,
        localtime: data.location.localtime,
        description: data.current.weather_description,
        icon: data.current.weather_icons,
        error: ''
      });
    } else {
      setWeather({
        temperature: '',
        city: '',
        country: '',
        localtime: '',
        description: '',
        icon: '',
        error: 'please enter city name'
      });
    }
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Weather App </h1>
      </header>
      <Form getWeather={fetchData} />
      {console.log(weather)}
      <Weather
        temperature={weather.temperature}
        localtime={weather.localtime}
        city={weather.city}
        country={weather.country}
        icon={weather.icon}
        description={weather.description}
        error={weather.error}
      />
    </div>
  );
}
export default App;
