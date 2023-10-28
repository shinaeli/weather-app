import React, { useState } from 'react'
// import { motion } from "framer-motion"
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
 
  const fetchData = () => {
    // 'fetch(url)' return s a response object which is a promise
    fetch(url).then(res => {
      if(!res.ok) {
        // an error message variable 'msg' is created
        const msg = `There was an error: "${res.status} ${res.statusText}".`;
        // the error message variable 'msg' is passed as an argument to the built-in 'new Error' object to create an an instance of an error object
        // the error object created is thrown down to the 'catch' block
        throw new Error(msg);
      }
      console.log(res);
      // 'json()' method is a function that is used to convert the data contained in a response object into a JSON readeable format
      // 'json()' method always returns a promise 
      return res.json();
    }).then(data => {
      console.log(data);
      setWeatherData(data);
      setIsLoading(false);
    })
    .catch(error => {
      console.log(error.message);
      setWeatherData(null);
      setErrorMessage(error.message);
      setIsLoading(false);
    });
  }

  const handleFetch = () => {
    if(!location) {
      setErrorMessage('No data provided.');
      setIsLoading(false);
    } else {
      setIsLoading(true)
      fetchData()
      console.log('fetching');
    }
    setLocation('')
  }

  return (
    <div style={{backgroundImage: `url(${skyView})`}} className='container'>
      <SearchLocation location={location} updateLocation={updateLocation} handleFetch={handleFetch} />
      {isLoading && <Spinner />}
      {weatherData && <WeatherMain weatherData={weatherData} />}
      {errorMessage && <ErrorPage errorMessage={errorMessage} />}
      {/* {weatherData ? <WeatherMain weatherData={weatherData} /> : <ErrorPage errorMessage={errorMessage} />} */}
    </div>
  )
}

export default App