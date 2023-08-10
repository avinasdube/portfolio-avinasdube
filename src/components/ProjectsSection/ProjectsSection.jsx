import React from 'react';
import './ProjectsSection.scss';

import mytask from '../../assets/images/mytasks.jpg';
import calculator from '../../assets/images/calculator.jpg';
import weatherin from '../../assets/images/weatherin.jpg';


const ProjectsSection = () => {

    const projects = [
        {
            id: 1,
            type: 'web application',
            pImage: mytask,
            pName: 'my task - a simple task app',
            pDescrip: 'a functional task app with add, edit and delete task features. it uses localstorage feature to provide temporary data storage to remember previously added tasks.',
            pViewLink: 'https://avinasdube.github.io/responsive-todoapp/',
            codeViewLink: 'https://github.com/avinasdube/responsive-todoapp'
        },
        {
            id: 2,
            type: 'web application',
            pImage: calculator,
            pName: 'simple calculator app',
            pDescrip: 'a responsive calculator app with all basic functionalities',
            pViewLink: 'https://avinasdube.github.io/modern-calculator/',
            codeViewLink: 'https://github.com/avinasdube/modern-calculator'
        },
        {
            id: 3,
            type: 'web application',
            pImage: weatherin,
            pName: 'weather.in - a live weather app',
            pDescrip: 'a live weather application built in react and nodejs which uses openweatherapp.org api to fetch live weather data. it also features light/dark mode button for better viewing experience.',
            pViewLink: 'https://avinasdube.github.io/weather.in/',
            codeViewLink: 'https://github.com/avinasdube/weather.in'
        },
    ];
    

    return (
        <div className='projectsSection'>
            <div className="projectsHead" id='prjcthd'><span></span>my works</div>
            <div className="projectsGrid" id='prjctgrd'>
                {
                    projects.map(project => (
                        <div className="projectCard" id='prjctcrd' key={project.id}>
                            <div className="projectImage" id='prjctimg'>
                                <img src={project.pImage} alt=''></img>
                            </div>
                            <div className="projectAbout">
                                <div className="projectType" id='prjctyp'>{project.type}</div>
                                <div className="projectName" id='prjctnme'>{project.pName}</div>
                                <div className="projectDescrip" id='prjctdcrp'>{project.pDescrip}</div>
                                <div className="projectActions">
                                    <a href={project.pViewLink} id='vwbtn'>View Live Project</a>
                                    <a href={project.codeViewLink} id='vwbtn'>View Code</a>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default ProjectsSection;