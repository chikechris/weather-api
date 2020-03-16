import React from "react";
import './Form.css'

const Form = props => (
  <form onSubmit={props.getWeather} className= 'form'>
    <input type="text" className='input' name="city" placeholder="City..." />
    <input type="text" className='input' name="country" placeholder="Country..." />
    <button className='btr'>Get Weather</button>
  </form>
);

export default Form;
