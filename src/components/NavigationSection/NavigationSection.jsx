import React from 'react';
import './NavigationSection.scss';
import av49 from '../../images/av49.jpg';

const NavigationSection = () => {
  return (
    <div className="container">
      <div className="navigation">
        <div className='navbarContainer'>
          <div className='navLeft'>
            <img src={av49} alt='./App.js' id='lgimg'></img>
            <a className="logo" href='./App.js' id='lgo'>Avinash Dubey</a>
          </div>
          <div className='cntButton'><button id='cntctme'>Contact Me</button></div>
        </div>
      </div>
    </div>
  )
}

export default NavigationSection