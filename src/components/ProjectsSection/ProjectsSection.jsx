import React from 'react';
import './ProjectsSection.scss';

import mytask from '../../images/mytasks.jpg';
import calculator from '../../images/calculator.jpg';
import weatherin from '../../images/weatherin.jpg';

const ProjectsSection = () => {

    const projects = [
        {
            id: 1,
            pImage: mytask,
            pName: 'My Task - A Simple Task App',
            pViewLink: 'https://avinasdube.github.io/responsive-todoapp/',
            codeViewLink: 'https://github.com/avinasdube/responsive-todoapp'
        },
        {
            id: 2,
            pImage: calculator,
            pName: 'Simple Calculator App',
            pViewLink: 'https://avinasdube.github.io/modern-calculator/',
            codeViewLink: 'https://github.com/avinasdube/modern-calculator'
        },
        {
            id: 3,
            pImage: weatherin,
            pName: 'Weather.In - A Live Weather App',
            pViewLink: 'https://avinasdube.github.io/weather.in/',
            codeViewLink: 'https://github.com/avinasdube/weather.in'
        },
    ];
    
    return (
        <div className='projectsSection'>
            <div className="projectsHead" id='prjcthd'>My Projects</div>
            <div className="projectsGrid" id='prjctgrd'>
                {
                    projects.map(project => (
                        <div className="projectCard" id='prjctcrd' key={project.id}>
                            <div className="projectImage" id='prjctimg'>
                                <img src={project.pImage} alt=''></img>
                            </div>
                            <div className="projectName" id='prjctnme'>{project.pName}</div>
                            <div className="projectAction">
                                <a href={project.pViewLink} id='vwprjctbtn'>View Live Project</a>
                                <a href={project.codeViewLink} id='vwcdbtn'>View Code</a>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default ProjectsSection;