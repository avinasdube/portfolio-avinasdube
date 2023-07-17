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
              <div className='hiremeHead'>
                Hire me today !
              </div>
              <div className='hiremeDesc'>
                Unlock your website's full potential with my expertise. Hire me,
                a skilled web developer, to take your online presence to the next level.
              </div>
            </div>

            <div className='bottomright'>
              <div className='connectHead'>
                Connect with me on :
              </div>
              <div className='connectLogo' id='cnctlgo'>
                <a href='https://www.linkedin.com/in/avinasdube/'><img src={linkedin} alt=''></img></a>
                <a href='http://www.instagram.com/avinas.dube/'><img src={instagram} alt=''></img></a>
                <a href='https://www.twitter.com/avinaasdube/'><img src={twitter} alt=''></img></a>
                <a href='https://github.com/avinasdube'><img src={github} alt=''></img></a>
              </div>
              <div className='copyright'>
                &copy; 2023 Avinash Dubey . All Rights Reserved 
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