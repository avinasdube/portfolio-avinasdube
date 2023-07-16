import React from 'react';
import './IllustrationSection.scss';
import { useInView } from 'react-intersection-observer';

import notasks from '../../images/notasks.png';
import design from '../../images/icons/design.png';
import develop from '../../images/icons/develop.png';
import deploy from '../../images/icons/deploy.png';

const IllustrationSection = () => {

    // CODE TO IMPLEMENT 'ANIMATE ON SCROLL' FEATURE


    const { ref: refDesignScard, inView: designCardIsVisible } = useInView();
    const { ref: refDevelopScard, inView: developCardIsVisible } = useInView();
    const { ref: refDeployScard, inView: deployCardIsVisible } = useInView();
    const { ref: refNotaskScard, inView: notaskCardIsVisible } = useInView();

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
        <div className='illustrationSection'>
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
        </div>
    )
}

export default IllustrationSection