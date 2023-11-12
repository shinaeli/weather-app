import React from 'react'
import PropTypes from 'prop-types'
const ErrorPage = ({ errorMessage }) => {
  console.log('Error received', errorMessage);

  return (
    <div className="main-error">
        <h1>{errorMessage}</h1>
    </div>
  )
}

ErrorPage.propTypes = {
  errorMessage: PropTypes.string.isRequired
}

ErrorPage.defaultProp = {
  errorMessage: "Failed to fetch."
}

export default ErrorPage