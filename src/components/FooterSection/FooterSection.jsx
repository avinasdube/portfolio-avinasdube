import React from 'react';
import './FooterSection.scss';

import linkedin from '../../images/icons/linkedin.png';
import instagram from '../../images/icons/instagram.png';
import twitter from '../../images/icons/twitter.png';
import github from '../../images/icons/github.png';

const FooterSection = () => {
  return (
    <footer>
          <div className='bottom' id='btm'>
            <div className='bottomleft'>
              <div className='hiremeHead' id='hrmhd'>
                <span></span>hire me today !
              </div>
              <div className='hiremeDesc' id='hrmdsk'>
                unlock your website's full potential with my expertise. hire me,
                a skilled web developer, to take your online presence to the next level.
                <br></br>
                <br></br>
                or wanna collaborate, i'm always down to it. give me a "hi" on any of the social 
                media platform listed below and let's get in touch for further discussions.
              </div>
            </div>

            <div className='bottomright' id='btmrght'>
              <div className='connectHead' id='cncthd'>
                <span></span>get in touch :
              </div>
              <div className='connectLogo' id='contlgo'>
                <a href='https://www.linkedin.com/in/avinasdube/'><img src={linkedin} alt=''></img></a>
                <a href='http://www.instagram.com/avinas.dube/'><img src={instagram} alt=''></img></a>
                <a href='https://www.twitter.com/avinaasdube/'><img src={twitter} alt=''></img></a>
                <a href='https://github.com/avinasdube'><img src={github} alt=''></img></a>
              </div>
              <div className='copyright'>
                &copy; 2023 avinash dubey . all rights reserved 
              </div>
              <div className='tagline'>
                सर्वं सम्भाव्यते त्वयि।
              </div>
            </div>
          </div>
        </footer>
  )
}

export default FooterSection