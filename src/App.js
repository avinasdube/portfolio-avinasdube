import React from 'react';
import './style.scss';

import av49 from './images/av49.jpg';
import html from './images/icons/html.png';
import css from './images/icons/css-3.png';
import javascript from './images/icons/js-file.png';
import react from './images/icons/structure.png';
import nodejs from './images/icons/nodejs.png';
import git from './images/icons/git.png';
import notasks from './images/notasks.png';

import design from './images/icons/design.png';
import develop from './images/icons/develop.png';
import deploy from './images/icons/deploy.png';
import { useInView } from 'react-intersection-observer';

import projects from './images/icons/projects.png';
import endorse from './images/icons/endorse.png';
import client from './images/icons/client.png';

import linkedin from './images/icons/linkedin.png';
import instagram from './images/icons/instagram.png';
import twitter from './images/icons/twitter.png';
import github from './images/icons/github.png';

function App() {

  // CODE TO IMPLEMENT 'ANIMATE ON SCROLL' FEATURE

  const { ref: refSkills, inView: skillsIsVisible } = useInView();
  const { ref: refDesignScard, inView: designCardIsVisible } = useInView();
  const { ref: refDevelopScard, inView: developCardIsVisible } = useInView();
  const { ref: refDeployScard, inView: deployCardIsVisible } = useInView();
  const { ref: refNotaskScard, inView: notaskCardIsVisible } = useInView();
  const { ref: refSkillScard, inView: skillCardIsVisible } = useInView();

  return (
    <div className="app">
      <div className="container">
        <div className="navigation">
          <div className='navbarContainer'>
            <div className="logo" >Avinash Dubey</div>
            <button id='cntctme'>Contact Me</button>
          </div>
        </div>
      </div>

      <div className='home'>
        <header>
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
        </header>

        <main>
          <div className='mainhead'>
            <div className='mheading'>My Exprertise</div>
          </div>

          <div className={`skillogo ${skillsIsVisible ? `skillogoAnimate` : ``}`} id='sklgo' ref={refSkills}>
            <div className='skillCard'>
              <img src={html} alt=''></img>
              <div className='skillDetail'>HTML</div>
            </div>
            <div className='skillCard'>
              <img src={css} alt=''></img>
              <div className='skillDetail'>CSS</div>
            </div>
            <div className='skillCard'>
              <img src={javascript} alt=''></img>
              <div className='skillDetail'>JavaScript</div>
            </div>
            <div className='skillCard'>
              <img src={react} alt=''></img>
              <div className='skillDetail'>ReactJs</div>
            </div>
            <div className='skillCard'>
              <img src={nodejs} alt=''></img>
              <div className='skillDetail'>Node.Js</div>
            </div>
            <div className='skillCard'>
              <img src={git} alt=''></img>
              <div className='skillDetail'>Git</div>
            </div>
          </div>

          <div className='aboutCard' id='abtcrd'>
            <div className='leftcard'>
              <div className={`scard ${designCardIsVisible ? `scardAnimate` : ``}`} ref={refDesignScard}>
                <img src={design} alt=''></img>
                <div className='sright'>
                  <div className='shead'>I Design</div>
                  <div className='sdescrip'>Design is in my veins. </div>
                </div>
              </div>
              <div id='dev' className={`scard ${developCardIsVisible ? `scardAnimate` : ``}`} ref={refDevelopScard}>
                <img src={develop} alt=''></img>
                <div className='sright'>
                  <div className='shead'>I Develop</div>
                  <div className='sdescrip'>Development is in my gene.</div>
                </div>
              </div>
              <div className={`scard ${deployCardIsVisible ? `scardAnimate` : ``}`} ref={refDeployScard}>
                <img src={deploy} alt=''></img>
                <div className='sright'>
                  <div className='shead'>I Deploy</div>
                  <div className='sdescrip'>Deployment is what I believe in.</div>
                </div>
              </div>
            </div>
            <div className={`rightcard ${notaskCardIsVisible ? `rightcardAnimate` : ``}`} ref={refNotaskScard} id='abtrghtcrd'>
              <img src={notasks} alt=''></img>
            </div>
          </div>

          <div className='designQuote'>
            <div className='qt' id='qyt'>"Design is the art of creating visual poetry. Let me do some for you !"</div>
          </div>

          <div className='achievements'>
            <div className={`achievementsCard ${skillCardIsVisible ? `achievementsCardAnimate` : ``}`} ref={refSkillScard}>
              <div className='icon'><img src={projects} alt=''></img></div>
              <div className='achievementsDesc'>10+ Projects</div>
            </div>
            <div className={`achievementsCard ${skillCardIsVisible ? `achievementsCardAnimate` : ``}`} ref={refSkillScard}>
              <div className='icon'><img src={endorse} alt=''></img></div>
              <div className='achievementsDesc'>50+ Endorsements</div>
            </div>
            <div className={`achievementsCard ${skillCardIsVisible ? `achievementsCardAnimate` : ``}`} ref={refSkillScard}>
              <div className='icon'><img src={client} alt=''></img></div>
              <div className='achievementsDesc'>5+ Clients</div>
            </div>
          </div>
        </main>

        <footer>
          <div className='bottom' id='btm'>
            <div className='bottomleft'>
              <div className='hiremeHead'>
                Hire me today !
              </div>
              <button>Hire Me</button>
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
            </div>
          </div>
        </footer>

      </div>
    </div>
  )
}

export default App;
