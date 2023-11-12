import React from 'react'
import VisibilityLogo from '../assets/images/visibility.png';
import PropTypes from 'prop-types'

const Visibility = ({ weatherData }) => {
  return (
    <div className='sub-main'>
        <div className="sub-img">
          <img src={VisibilityLogo} alt="show visibility icon" />
        </div>
        <div className="sub-1">
            <h3 className='sub-1-title'>Visibility</h3>
            <h3 className='sub-1-value'>{`${weatherData.visibility}`}</h3>
        </div>
    </div>
  )
}

Visibility.propTypes = {
  weatherData: PropTypes.object.isRequired,
}

export default Visibility