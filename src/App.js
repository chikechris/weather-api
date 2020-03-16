import React, { useState } from 'react'

import './App.css' 

const api = {
  key: "d8aed0cdcc48eed9be637fc927e2db93", 
  url: "https://samples.openweathermap.org/data/2.5/"
}

function App () {

const dateData = (d) => {
  let months = ["January, February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; 
  let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] 

  let day = days[d.getDay()] 
  let date = d.getDate() 
  let month = months[d.getMonth()] 
  let year = d.getFullYear()

  return `${day} ${date} ${month} ${year}`
}

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Weather App </h1>
      </header>
      <div className='search-box'>
        <input 
        type="text"
          className= 'search-bar' 
          placeholder='Search....'
        />
      </div>
      <div className= 'location-box'>
        <div className='location'>Atlanta, USA</div>
          <div  className= 'date'>{dateData(new Date())} </div>   
      </div>
      <div className='weather box'>
          <div className='temp'>
            15*c
          </div> 
          <div className='weather'>Cold</div>
      </div>

    </div>
  )
}

export default App
