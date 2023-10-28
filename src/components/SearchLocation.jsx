import React from 'react'
import Search from '../assets/images/search.png'
import PropTypes from 'prop-types'

const SearchLocation = ({location, updateLocation, handleFetch}) => {

  const handleSearch = e => {
    e.preventDefault();
    handleFetch();
  }

  return (
    <div>
          <form action="" onSubmit={handleSearch}>
              <input type="text" placeholder='Search for a city...' value={location} onChange={e => updateLocation(e.target.value)} />
              <button className='btn' type='submit'>
                <img src={Search} alt="search icon" />
              </button>
          </form>
    </div>
  )
}

SearchLocation.propTypes = {
  location: PropTypes.string.isRequired,
  updateLocation: PropTypes.func.isRequired,
  handleFetch: PropTypes.func.isRequired, 
}

export default SearchLocation