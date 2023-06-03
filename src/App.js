// IMPORTING NECESSARY DEPENDENCIES

import './style.scss';
import { useInView } from 'react-intersection-observer';

import LoadingScreen from './components/Loader.jsx';

// IMPORTING REQUIRED IMAGES AND FILES

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

import projects from './images/icons/projects.png';
import endorse from './images/icons/endorse.png';
import client from './images/icons/client.png';

import linkedin from './images/icons/linkedin.png';
import instagram from './images/icons/instagram.png';
import twitter from './images/icons/twitter.png';
import github from './images/icons/github.png';
import { useEffect, useState } from 'react';

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3145);
  }, []);

  // CODE TO IMPLEMENT 'ANIMATE ON SCROLL' FEATURE

  const { ref: refSkills, inView: skillsIsVisible } = useInView();
  const { ref: refDesignScard, inView: designCardIsVisible } = useInView();
  const { ref: refDevelopScard, inView: developCardIsVisible } = useInView();
  const { ref: refDeployScard, inView: deployCardIsVisible } = useInView();
  const { ref: refNotaskScard, inView: notaskCardIsVisible } = useInView();
  const { ref: refSkillScard, inView: skillCardIsVisible } = useInView();
  const { ref: refContactMeCard, inView: contactMeIsVisible } = useInView();

  // SETTING ARRAY OF SKILLS TO DISPLAY

  const skillDetails = [
    {
      id: 1,
      simg: html,
      skill: "HTML"
    },
    {
      id: 2,
      simg: css,
      skill: "CSS"
    },
    {
      id: 3,
      simg: javascript,
      skill: "JavaScript"
    },
    {
      id: 4,
      simg: react,
      skill: "ReactJs"
    },
    {
      id: 5,
      simg: nodejs,
      skill: "Node.Js"
    },
    {
      id: 6,
      simg: git,
      skill: "Git"
    }
  ];

  // SETTING ARRAY OF KNOWN ABOUTS

  const abouts = [
    {
      id: 1,
      abtimg: design,
      abthead: "I Design",
      abtdescrip: "Design is in my veins. ",
      ref: refDesignScard,
      class: designCardIsVisible,
    },
    {
      id: 2,
      abtimg: develop,
      abthead: "I Develop",
      abtdescrip: "Development is in my gene.",
      ref: refDevelopScard,
      class: developCardIsVisible,
    },
    {
      id: 3,
      abtimg: deploy,
      abthead: "I Deploy",
      abtdescrip: "Deployment is what I believe in.",
      ref: refDeployScard,
      class: deployCardIsVisible,
    }
  ];

  return (
    <>
    {loading ? <LoadingScreen /> :

    (<div className="app">
      <div className="container">
        <div className="navigation">
          <div className='navbarContainer'>
            <div className="logo" >Avinash Dubey</div>
            <div className='cntButton'><button id='cntctme'>Contact Me</button></div>
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
            {skillDetails.map(skill => (
              <div className='skillCard' key={skill.id}>
                <img src={skill.simg} alt=''></img>
                <div className='skillDetail'>{skill.skill}</div>
              </div>
            ))}
          </div>

          <div className='aboutCard' id='abtcrd'>
            <div className='leftcard'>
              {abouts.map(about => (
                <div className={`scard ${about.class ? `scardAnimate` : ``}`} ref={about.ref} key={about.id}>
                  <img src={about.abtimg} alt=''></img>
                  <div className='sright'>
                    <div className='shead'>{about.abthead}</div>
                    <div className='sdescrip'>{about.abtdescrip}</div>
                  </div>
                </div>
              ))}
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

          <div className={`contactMe ${contactMeIsVisible ? `contactMeAnimate` : ``}`} ref={refContactMeCard}>
            <div className='contactMeHeading'>
              <div className='contactMeHead' id='cntctMeHd'>Contact Me</div>
              <div className='contactMeDescrip'>Contact me now to hire and let me build your website.</div>
            </div>
            <form className='contactMeForm'>
              <div className='contactMeFormTop' id='frmtop'>
                <div className='contactMeFormRight'>
                  <div className='formInputDiv'>
                    <label>Your Name</label>
                    <input type='text' required></input>
                  </div>
                  <div className='formInputDiv'>
                    <label>Your Email</label>
                    <input type='email' required></input>
                  </div>
                  <div className='formInputDiv'>
                    <label>Your Phone No.</label>
                    <input type='text'></input>
                  </div>
                </div>
                <div className='contactMeFormLeft'>
                  <div className='rightInput'>
                    <label>Your Message</label>
                    <textarea></textarea>
                  </div>
                </div>
              </div>
              <div className='contactMeFormBottom'><button>Send Message</button></div>
            </form>
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
    </div>)}
    </>
  )
}

export default App;
