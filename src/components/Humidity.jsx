import React from 'react'
import HumidityLogo from '../assets/images/humidity.png';
import PropTypes from 'prop-types'

const Humidity = ({ weatherData }) => {
  return (
    <div className='sub-main'>
        <div className="sub-img">
          <img src={HumidityLogo} alt="show humidity icon" />
        </div>
        <div className="sub-1">
            <h3 className='sub-1-title'>Humidity</h3>
            <h3 className='sub-1-value'>{`${weatherData.main.humidity}%`}</h3>
        </div>
    </div>
  )
}

Humidity.propTypes = {
  weatherData: PropTypes.object.isRequired,
}

export default Humidity