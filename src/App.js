import React, { useState } from 'react';
import Form from './components/Form' 
import Weather from './components/Weather'

import './App.css';





function App() {
  // const [query, setQuery] = useState('');
  // const [weatherData, setWeatherData] = useState({});
  const [weather, setWeather] = useState([]); 

  async function fetchData(e) {
    e.preventDefault() 
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
   
     const data =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=d8aed0cdcc48eed9be637fc927e2db93`)
    .then(res => res.json())
    .then(data => data)
    setWeather({
      temperature: Math.round(data.main.temp * 9/5 - 459.67),
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""
    }) 
  }

  // const search = et => {
  //   if (et.key === 'Enter') {
  //     fetch(
  //       `http://api.weatherstack.com/current?access_key=2f9fb3f033b30a0bcddb462b5d945ee4&query=${query}`
  //     )
  //       .then(res => res.json())
  //       .then(result => {
  //         setWeatherData(result);
  //         setQuery('');
  //         console.log(result);
  //       });
  //   }
  // };
 
  // function toFahrenheit(K) {

  //   // =
  //   return (K - 273.15) * 1.8000 + 32.00;
  // }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Weather App </h1>
      </header>
      <Form  getWeather={fetchData}/> 
      {console.log(weather)}
      <Weather 
        temperature={weather.temperature}
        humidity={weather.humidity}
        city={weather.city}
        country={weather.country}
        description={weather.description}
        error={weather.error}
      />
      </div>
  );
}
      export default App;



//       {/* <div className='search-box'>
//         {/* <input
//           type='text'
//           className='search-bar'
//           placeholder='Search City Name and click Enter.'
//           value={query}
//           onChange={e => setQuery(e.target.value)}
//           onKeyPress={search}
//         /> */}
//       {/* </div> */} 
//       {/* // {typeof weatherData.request != 'undefined' ? ( */}
// {/*         
//       //   <>
//       //     <div className='location-box'>
//       //       <div className='location'>
//       //         {weatherData.location.name}, {weatherData.location.country}{' '}
//       //       </div>
//       //       <div className='date'>
//       //         Observed At: {weatherData.current.observation_time}{' '}
//       //       </div>
//       //       <div className='local-time'>
//       //         Local Date & Time: {weatherData.location.localtime}{' '}
//       //       </div>
//       //     </div>
//       //     <div className='weather-box'>
//       //       <div className='temp'>
//       //         {Math.round(toFahrenheit(weatherData.current.temperature))}°f
//       //       </div>
//       //       {/* <div className='icon'>
//       //         {<img src= {weatherData.current.weather_icons} />}
//       //       </div> */}
//       {/* //       <div className='weather'>
//       //         {weatherData.current.weather_descriptions}
//       //       </div>
//       //     </div> */}
//       {/* //   </> */}

//       {/* //  ) : (
//       //   'please enter city name'
//       // )}  
//     </div>
//   );
// }

// export default App;
