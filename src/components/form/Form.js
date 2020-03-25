import React from "react";
import './Form.css'



const Form = ({query, onChange,  onClick}) => (

  <form className= 'form'>
    <input type="text" className='input' value={query}onChange={onChange}/>
  <button className='btr' onClick={onClick}>Get Weather</button>
  </form>
);

export default Form;
