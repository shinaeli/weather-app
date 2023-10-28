import React from 'react'
import Visibility from './Visibility'
import Humidity from './Humidity'
import Pressure from './Pressure'
import Wind from './Wind'
import { getSkyView } from '../custom/get_sky_view'
import PropTypes from 'prop-types'

const WeatherMain = ({ weatherData }) => {
const skyView = getSkyView(weatherData.weather[0].main);

  return (
    <div>
        <h1 className='location'>{weatherData.name}, {weatherData.sys.country}.</h1>
        <h3 className='weather-main'>{weatherData.weather[0].main}</h3>
        <div className="sky-view">
            <img src={skyView} alt="show the sky" />
        </div>
        <h3 className='weather-main-temp'>{Math.floor(weatherData.main.temp)}°C</h3>
        <div className="sub-temp">
            <h3 className='temp-min'>Min: {Math.floor(weatherData.main["temp_min"])}°C</h3>
            <h3 className='temp-max'>Max: {Math.floor(weatherData.main["temp_max"])}°C</h3>
        </div>
        <div className="sub">
            <Visibility weatherData={weatherData} />
            <Humidity weatherData={weatherData} />
        </div>
        <div className="sub">
            <Pressure weatherData={weatherData} />
            <Wind weatherData={weatherData} />
        </div>
    </div>
  )
}

WeatherMain.propTypes = {
    weatherData: PropTypes.object.isRequired,
}

WeatherMain.defaultProp = {
    weatherData: null,
}

export default WeatherMain