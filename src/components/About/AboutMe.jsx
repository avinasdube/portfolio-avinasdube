import { useState } from 'react';
import avinas from '../../assets/images/avinas.jpg';
import indiagate from '../../assets/images/indiagate.JPG';
import './AboutMe.scss';

const AboutMe = () => {

    const [transform, setTransform] = useState('translate(0px, 0px)');

    const handleMouseMove = (event) => {
        const element = event.currentTarget;
        const rect = element.getBoundingClientRect();
        const mouseX = event.clientX - rect.left; // Mouse X position relative to the element
        const mouseY = event.clientY - rect.top; // Mouse Y position relative to the element

        let moveX = 0;
        let moveY = 0;

        if (mouseX > rect.width / 2) {
            moveX = 5; // Move right
        } else {
            moveX = -5; // Move left
        }

        if (mouseY > rect.height / 2) {
            moveY = 5; // Move down
        } else {
            moveY = -5; // Move up
        }

        setTransform(`translate(${moveX}px, ${moveY}px)`);
    };

    const handleMouseLeave = () => {
        setTransform('translate(0px, 0px)');
    };


    return (
        <div className="aboutMeContainer">
            <div className="aboutMeSubContainer">
                <div className="profileSection">
                    <div className="midImg" style={{ transform }} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                        <img src={avinas} alt='Avinash Dubey'></img>
                    </div>
                    <div className="rightImg" style={{ transform }} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                        <img src={indiagate} alt='Avinash Dubey'></img>
                    </div>
                </div>
                <div className="detailSection">
                    <h1>namaskar! i'm avinash dubey</h1>
                    <p>
                        I am a software engineer with a passion for creating web applications. I
                        have experience with JavaScript, React, Node.js, and other technologies.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;