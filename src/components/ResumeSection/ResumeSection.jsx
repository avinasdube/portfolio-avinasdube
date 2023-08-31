import React from 'react';
import './ResumeSection.scss';
import resumeicon from '../../assets/icons/resume.png';

const ResumeSection = () => {
  return (
    <div className='resumeSection'>
        <div className="head">
            <a id='hdng' href={process.env.PUBLIC_URL + '/Avinash Dubey - Resume.pdf'} download>download my resume !</a>
        </div>
        <div className="resumeIcon">
            <img id='rimg' src={resumeicon} alt=''></img>
        </div>
    </div>
  )
}

export default ResumeSection;