/* eslint-disable no-unused-vars */
import React, {useState} from 'react'


const Card = () => {
  const [temperature, setTemperature] = useState(10);
  const handleClick = () => {
    setTemperature(temperature + 1);
  }
    return (
        <div className='app-container'>
          <div className='temperature-display-container'>
          <p className='temperature-display'>{temperature}°C</p>
        </div>
        <div className='button-container'>
          <button className='button' type='button' onClick={handleClick}>+</button>
          <button className='button' type='button' onClick={handleClick}>-</button>
        </div>
    </div>
  )
}

export default Card
