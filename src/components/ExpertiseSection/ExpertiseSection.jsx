import React from 'react';
import './ExpertiseSection.scss';

import html from '../../images/icons/html.png';
import css from '../../images/icons/css-3.png';
import javascript from '../../images/icons/js-file.png';
import react from '../../images/icons/structure.png';
import nodejs from '../../images/icons/nodejs.png';
import git from '../../images/icons/git.png';

import { useInView } from 'react-intersection-observer';

const ExpertiseSection = () => {

    const { ref: refSkills, inView: skillsIsVisible } = useInView();

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
    return (
        <div className='expertiseSection'>
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
        </div>
    )
}

export default ExpertiseSection