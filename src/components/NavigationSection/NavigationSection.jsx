import React from 'react';
import './NavigationSection.scss';
import linkedin from '../../images/icons/linkedin.png';

const NavigationSection = () => {
  return (
      <div className="navigation">
        <div className='navbarContainer'>
          <div className='navLeft'>
            <a className="logo" href='./App.js' id='lgo'>avinash dubey</a>
            <span className='profession' id='prfsntg'>web developer</span>
          </div>
          <div className='navRight'>
            <a href='https://www.linkedin.com/in/avinasdube/'><img src={linkedin} alt='' id='cnctlgo'></img></a>
          </div>
        </div>
    </div>
  )
}

export default NavigationSection