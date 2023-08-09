import React from 'react';
import './WelcomeSection.scss';


import av49 from '../../images/av49.jpg';

const WelcomeSection = () => {
  return (
    <div className='welcomeSection'>
      <div className='headermid' id='hdrmd'>
        <div className='midleft' id='mdlft'>
          <div className='mlhead'>
            namaskar, i am avinash dubey
          </div>
          <div className='mlmid'>
            a web-developer fascinated by the change in
            world of web technology. i specialize in 
            mern stack and react gives me confidence. 
            i find similarity between writing codes and poetry.
            my work defines my consistency. open sourcing drives
            me.
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