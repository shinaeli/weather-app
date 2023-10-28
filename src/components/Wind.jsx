import React from 'react'
import WindLogo from '../assets/images/wind.png';
const Wind = ({ weatherData }) => {
  return (
    <div className='sub-main'>
        <div className="sub-img">
          <img src={WindLogo} alt="show wind icon" />
        </div>
        <div className="sub-1">
            <h3 className='sub-1-title'>Wind</h3>
            <h3 className='sub-1-value'>{weatherData.wind.speed} m/s</h3>
        </div>
    </div>
  )
}

export default Wind