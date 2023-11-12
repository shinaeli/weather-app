import React, { useState } from 'react'
import { motion } from "framer-motion"
import SearchLocation from './components/SearchLocation'
import WeatherMain from './components/WeatherMain'
import ErrorPage from './components/ErrorPage'
import Spinner from './components/Spinner'
import { getSkyView } from './custom/get_sky_view'
import { sampleData } from './data/sample_data'


const App = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(sampleData);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const updateLocation = item => setLocation(item);

  const skyView = getSkyView(weatherData.weather[0].main);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location.toLowerCase()}&appid=${process.env.REACT_APP_WEATHERMAPAPI_KEY}&units=metric`;
 
  async function getData() {
    try {
      const response = await fetch(url);
      console.log(response);
      if(!response.ok) {
        throw new Error(`There was an error: "${response.status} ${response.statusText}".`)
      }
      const data = await response.json();
      console.log(data);
      setWeatherData(data);
      setErrorMessage('');
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      setWeatherData(null);
      setErrorMessage(error => error.message);
      setIsLoading(false);
    }
  }


  const handleFetch = () => {
    if(!location) {
      setErrorMessage('No data provided.');
      setIsLoading(false);
    } else {
      setIsLoading(true);
      getData();
      console.log('fetching');
    }
    setLocation('')
  };

  
  
  return (
    <motion.div
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    transition={{ duration: 0.5 }} 
    style={{backgroundImage: `url(${skyView})`}} 
    className='container'>
        <SearchLocation location={location} updateLocation={updateLocation} handleFetch={handleFetch} />
        {isLoading && <Spinner />}
        {errorMessage && <ErrorPage errorMessage={errorMessage} />}    
        {weatherData && <WeatherMain weatherData={weatherData} />}
    </motion.div>
  )
}

export default App