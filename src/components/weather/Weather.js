import React from 'react';

const Weather = ({ city, temperature, description, country,   error }) => {
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
      {error && <p>{error}</p>}
    </div>
  );
};

export default Weather;
