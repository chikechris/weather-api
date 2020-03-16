import React from 'react';

const Weather = ({ city, temperature, description, country, localtime, icon, error }) => {
  return (
    <div>
      {city && country && (
        <p>
          {city}, {''}
          {country}
        </p>
      )}
      {temperature && <p>Temperature:{temperature} °F</p>}
      {description && <p>Description: {description}</p>}
      {localtime && <p>Local Time: {localtime}</p>}
      {icon && <img src= {icon}/>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Weather;
