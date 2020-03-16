import React, { useState } from 'react';
import Form from './components/form/Form';
import Weather from './components/weather/Weather';

import './App.css';

function App() {
  const [weather, setWeather] = useState([]);

  async function fetchData(e) {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=d8aed0cdcc48eed9be637fc927e2db93`
    )
      .then(res => res.json())
      .then(data => data);
    console.log(data);
    if (city && country) {
      setWeather({
        temperature: Math.round((data.main.temp * 9) / 5 - 459.67),
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ''
      });
    } else {
      setWeather({
        temperature: '',
        city: '',
        country: '',
        humidity: '',
        description: '',

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
        city={weather.city}
        country={weather.country}
        humidity={weather.humidity}
        description={weather.description}
        error={weather.error}
      />
    </div>
  );
}
export default App;
