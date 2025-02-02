import React, { useState } from 'react';
import './WelcomeSection.scss';
import locat from '../../assets/icons/locat.png';

const WelcomeSection = () => {
  const [transform, setTransform] = useState('translate(0px, 0px)');

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const moveX = mouseX > rect.width / 2 ? 5 : -5;
    const moveY = mouseY > rect.height / 2 ? 5 : -5;

    setTransform(`translate(${moveX}px, ${moveY}px)`);
  };

  const handleMouseLeave = () => {
    setTransform('translate(0px, 0px)');
  };

  return (
    <div className='welcomeSection' onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className="greet" id='grt' style={{ transform }}>namaskar, i am avinash</div>
      <div className="basedIn">
        <img src={locat} alt="Location icon" />
        <div className="place">greater noida, up</div>
      </div>
      <div className="intro">
        <p>currently, learning python and exploring the world of data science and machine learning.</p>
      </div>
    </div>
  );
}

export default WelcomeSection;
