import React, { useState } from 'react'
import { Link } from "react-router-dom"
const ErrorBoundaryPage = () => {
  const [showAlert, setShowAlert] = useState(false);
  const timer = () => {
    setInterval(() => setShowAlert(true), 500);
    setShowAlert(false);
  };

  return (
    <div className="error-page">
        {showAlert && <h1>Please, reload entire page.</h1>}
        <h1>404 Page Error: Failed to fetch.</h1>
        {!showAlert && <Link to="/" onClick={timer} className="error-btn">Go Back Home</Link>}
    </div>
  )
}

export default ErrorBoundaryPage