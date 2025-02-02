import React, { useState } from 'react';
import './NavigationSection.scss';
import avtr from '../../assets/icons/avinas.png';
import { Link } from 'react-router-dom';

const NavigationSection = () => {

  const [transform, setTransform] = useState('translate(0px, 0px)');

  const handleMouseMove = (event) => {
    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();
    const mouseX = event.clientX - rect.left; // Mouse X position relative to the element
    const mouseY = event.clientY - rect.top; // Mouse Y position relative to the element

    let moveX = 0;
    let moveY = 0;

    if (mouseX > rect.width / 2) {
      moveX = 3; // Move right
    } else {
      moveX = -3; // Move left
    }

    if (mouseY > rect.height / 2) {
      moveY = 3; // Move down
    } else {
      moveY = -3; // Move up
    }

    setTransform(`translate(${moveX}px, ${moveY}px)`);
  };

  const handleMouseLeave = () => {
    setTransform('translate(0px, 0px)');
  };

  return (
    <div className="navigation" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className='navbarContainer'>
        <div className="navMid" style={{ transform }}>
          <div className="option"><Link className='link' to={'/'}>projects</Link></div>
          <div className="option"><Link className='link' to={'/about'}>about</Link></div>
        </div>
      </div>
    </div>
  )
}

export default NavigationSection