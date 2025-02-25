import { useState } from 'react';
import avinas from '../../assets/images/avinash.jpg';
import indiagate from '../../assets/images/indiagate.JPG';
import './AboutMe.scss';
import Skills from '../Skills/Skills.jsx';

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
                        i'm a developer who finds joy in creating and building things from scratch.
                        i'm proficient in the MERN stack, C, and C++, and i'm currently diving deep
                        into Python to explore the realms of data science, machine learning, and AI.
                        my journey in programming has always been fueled by a passion for solving
                        problems and bringing ideas to life. currently, i'm pursuing my master's in 
                        computer applications from  <a href='https://www.galgotiasuniversity.edu.in/' id='lnk'>galgotias university, greater noida</a>.
                        

                        <br></br>
                        <br></br>

                        programming, to me, is like poetry. each line of code is like a line of verse—meticulously
                        crafted, thoughtful, and expressive. just as a poet uses words to convey emotions and stories,
                        i use code to create digital experiences. the beauty lies in the simplicity and elegance of
                        a well-written function, much like a well-composed poem.

                        <br></br>
                        <br></br>

                        i always try to bring a unique blend of technical skills and a creative mindset.
                        i don't just write code; i create solutions that are intuitive and impactful. my approach
                        to development is holistic—i see the bigger picture and understand how each piece fits together.

                        <br></br>
                        <br></br>

                        in programming, i see patterns and rhythms akin to those in poetry. this perspective allows me
                        to approach coding with a unique sensibility, balancing logic with creativity. whether it's
                        optimizing an algorithm or designing a user interface, i strive to create work that resonates
                        on a deeper level.

                        <br></br>
                        <br></br>

                        to sum it up, i'm a coder who finds poetry in algorithms, a developer who sees beauty in code, 
                        and a lifelong learner driven by curiosity and a desire to create meaningful change.

                    </p>
                </div>

                <Skills />
            </div>
        </div>
    );
};

export default AboutMe;