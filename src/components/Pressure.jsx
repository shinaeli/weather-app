import React from 'react'
import PressureLogo from '../assets/images/pressure.jpg';
import PropTypes from 'prop-types'

const Pressure = ({ weatherData }) => {
  return (
    <div className='sub-main'>
        <div className="sub-img">
          <img src={PressureLogo} alt="show pressure icon" />
        </div>
        <div className="sub-1">
            <h3 className='sub-1-title'>Pressure</h3>
            <h3 className='sub-1-value'>{`${weatherData.main.pressure} hPa`}</h3>
        </div>
    </div>
  )
}

Pressure.propTypes = {
  weatherData: PropTypes.object.isRequired,
}

// Pressure.defaultProp = {
//   weatherData: {},
// }

export default Pressure