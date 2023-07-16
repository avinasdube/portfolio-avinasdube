import React from 'react';
import './AchievementSection.scss';

import { useInView } from 'react-intersection-observer';

import projects from '../../images/icons/projects.png';
import endorse from '../../images/icons/endorse.png';
import client from '../../images/icons/client.png';

const AchievementSection = () => {

    
  const { ref: refSkillScard, inView: skillCardIsVisible } = useInView();

    return (
        <div className='achievementSection'>
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
    )
}

export default AchievementSection