import React from 'react';
import './ProjectsSection.scss';

import mytask from '../../images/mytasks.jpg';
import calculator from '../../images/calculator.jpg';
import weatherin from '../../images/weatherin.jpg';

const ProjectsSection = () => {
    return (
        <div className='projectsSection'>
            <div className="projectsHead" id='prjcthd'>My Projects</div>
            <div className="projectsGrid" id='prjctgrd'>
                <div className="projectCard" id='prjctcrd'>
                    <div className="projectImage" id='prjctimg'>
                        <img src={mytask} alt=''></img>
                    </div>
                    <div className="projectName" id='prjctnme'>My Task - A Simple Task App</div>
                    <div className="projectAction">
                        <a href='https://avinasdube.github.io/responsive-todoapp/' id='vwprjctbtn'>View Live Project</a>
                        <a href='https://github.com/avinasdube/responsive-todoapp' id='vwcdbtn'>View Code</a>
                    </div>
                </div>
                <div className="projectCard" id='prjctcrd'>
                    <div className="projectImage" id='prjctimg'>
                        <img src={calculator} alt=''></img>
                    </div>
                    <div className="projectName" id='prjctnme'>Simple Calculator App</div>
                    <div className="projectAction">
                        <a href='https://avinasdube.github.io/modern-calculator/' id='vwprjctbtn'>View Live Project</a>
                        <a href='https://github.com/avinasdube/modern-calculator' id='vwcdbtn'>View Code</a>
                    </div>
                </div>
                <div className="projectCard" id='prjctcrd'>
                    <div className="projectImage" id='prjctimg'>
                        <img src={weatherin} alt=''></img>
                    </div>
                    <div className="projectName" id='prjctnme'>Weather.In - A Live Weather App</div>
                    <div className="projectAction">
                        <a href='https://avinasdube.github.io/weather.in/' id='vwprjctbtn'>View Live Project</a>
                        <a href='https://github.com/avinasdube/weather.in' id='vwcdbtn'>View Code</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsSection;