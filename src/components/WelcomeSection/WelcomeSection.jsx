import React from 'react';
import './WelcomeSection.scss';


import av49 from '../../images/av49.jpg';

const WelcomeSection = () => {
  return (
    <div className='welcomeSection'>
      <div className='headermid' id='hdrmd'>
        <div className='midleft' id='mdlft'>
          <div className='mlhead'>
            Namaskar, I am Avinash Dubey
          </div>
          <div className='professionTag'>Web Developer</div>
          <div className='mlmid'>
            I'm a web developer with a passion for creating dynamic and
            user-friendly websites. I believe that clean and organized
            code is key to building successful websites that are both
            efficient and easy to maintain.
          </div>
          <div className='mlfoot'>
            <button>Mail Me</button>
          </div>
        </div>
        <div className='midright' id='mdrght'>
          <img src={av49} alt='none'></img>
        </div>
      </div>
    </div>
  )
}

export default WelcomeSection;