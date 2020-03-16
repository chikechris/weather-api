import React, { useState } from 'react';

import './App.css';

// const api = {
//   key: "d8aed0cdcc48eed9be637fc927e2db93",
//   url: "https://samples.openweathermap.org/data/2.5/"
// }

function App() {
  const [query, setQuery] = useState('');
  const [weatherData, setWeatherData] = useState({});
  const search = et => {
    if (et.key === 'Enter') {
      fetch(
        `http://api.weatherstack.com/current?access_key=2f9fb3f033b30a0bcddb462b5d945ee4&query=${query}`
      )
        .then(res => res.json())
        .then(result => {
          setWeatherData(result);
          setQuery('');
          console.log(result);
        });
    }
  };
  // const dateData = (d) => {
  //   let months = ["January, February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  //   let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  //   let day = days[d.getDay()]
  //   let date = d.getDate()
  //   let month = months[d.getMonth()]
  //   let year = d.getFullYear()

  //   return `${day} ${date} ${month} ${year}`
  // }

  function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Weather App </h1>
      </header>
      <div className='search-box'>
        <input
          type='text'
          className='search-bar'
          placeholder='Search City Name and click Enter.'
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyPress={search}
        />
      </div>
      {typeof weatherData.request != 'undefined' ? (
        <>
          <div className='location-box'>
            <div className='location'>
              {weatherData.location.name}, {weatherData.location.country}{' '}
            </div>
            <div className='date'>
              Observed At: {weatherData.current.observation_time}{' '}
            </div>
            <div className='local-time'>
              Local Date & Time: {weatherData.location.localtime}{' '}
            </div>
          </div>
          <div className='weather-box'>
            <div className='temp'>
              {Math.round(toFahrenheit(weatherData.current.temperature))}°f
            </div>
            {/* <div className='icon'>
              {<img src= {weatherData.current.weather_icons} />}
            </div> */}
            <div className='weather'>
              {weatherData.current.weather_descriptions}
            </div>
          </div>
        </>
      ) : (
        'please enter city name'
      )}
    </div>
  );
}

export default App;
