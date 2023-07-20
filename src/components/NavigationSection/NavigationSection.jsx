import React from 'react';
import './NavigationSection.scss';
import av49 from '../../images/av49.jpg';
import linkedin from '../../images/icons/linkedin.png';

const NavigationSection = () => {
  return (
    <div className="container">
      <div className="navigation">
        <div className='navbarContainer'>
          <div className='navLeft'>
            <img src={av49} alt='./App.js' id='lgimg'></img>
            <a className="logo" href='./App.js' id='lgo'>Avinash Dubey</a>
          </div>
          <div className='navRight' id='cnctlgo'><a href='https://www.linkedin.com/in/avinasdube/'><img src={linkedin} alt=''></img></a></div>
        </div>
      </div>
    </div>
  )
}

export default NavigationSection