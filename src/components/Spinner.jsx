import React from 'react'
import Spin from '../assets/gifs/loading.gif'
const Spinner = () => {
  return (
    <div className='loader'>
        <img src={Spin} alt="" />
    </div>
  )
}

export default Spinner