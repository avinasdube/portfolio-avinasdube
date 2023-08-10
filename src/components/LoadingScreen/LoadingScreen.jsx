import React from 'react';
import './LoadingScreen.scss';

const LoadingScreen = () => {
  return (
    <>
      <div className='loading'>
        <div className='tagline'>
          सर्वं सम्भाव्यते त्वयि।
        </div>
        <div className="progressBar">
          <span></span>
        </div>
      </div>
    </>
  )
}

export default LoadingScreen