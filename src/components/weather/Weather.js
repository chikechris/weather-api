import React from 'react';
import './Weather.css';

const Weather = ({ city, temp, country, humid, descrip }) => {
  return (
    <div className='card'>
      {city && country && (
        <p>
          {city}, {''}
          {country}
        </p>
      )}
      {temp && <p>Temperature: {temp} °F</p>}
      {humid && <p>Humidity: {humid}</p>}
      {descrip && <p>Description: {descrip}</p>}
    </div>
  );
};

export default Weather;
