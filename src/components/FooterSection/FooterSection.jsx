import React from 'react';
import './FooterSection.scss';

import linkedin from '../../assets/icons/linkedin.png';
import instagram from '../../assets/icons/instagram.png';
import twitter from '../../assets/icons/twitter.png';
import github from '../../assets/icons/github.png';

const FooterSection = () => {
  return (
    <footer>
      <div className="copyright" id='cprt'>
        
        <div className='connectLogo' id='contlgo'>
          <a href='https://www.linkedin.com/in/avinasdube/'><img src={linkedin} alt=''></img></a>
          <a href='http://www.instagram.com/avinas.dube/'><img src={instagram} alt=''></img></a>
          <a href='https://www.twitter.com/avinaasdube/'><img src={twitter} alt=''></img></a>
          <a href='https://github.com/avinasdube'><img src={github} alt=''></img></a>
        </div>

        <div className="message">
          this site is hand crafted with care by avinash dubey.
        </div>
        <div>
          &copy; 2025 avinash dubey . all rights reserved
        </div>
        <div id='cprtdsc'>
          सर्वं सम्भाव्यते त्वयि।
        </div>
      </div>
    </footer>
  )
}

export default FooterSection