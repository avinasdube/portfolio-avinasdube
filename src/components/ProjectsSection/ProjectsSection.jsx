import React from 'react';
import './ProjectsSection.scss';

import listdown from '../../assets/images/listdown.jpg';
import calculator from '../../assets/images/calculator.jpg';
import weatherin from '../../assets/images/weatherin.jpg';
import menhew from '../../assets/images/menhew.jpg';
import ScrollAnimation from '../ScrollAnimation/ScrollAnimation';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      type: 'web application',
      pImage: menhew,
      pName: 'menhew',
      pDescrip: 'an e-commerce application for men clothing built using mern stack with stripe integration.',
      pViewLink: 'https://menhew.onrender.com',
      codeViewLink: 'https://github.com/avinasdube/menhew',
    },
    {
      id: 2,
      type: 'web application',
      pImage: listdown,
      pName: 'listdown',
      pDescrip: 'a beautiful and fully responsive to-do app built using nodejs and reactjs with redux implementation to facilitate efficient and reliable task management features.',
      pViewLink: 'https://listdown.vercel.app/',
      codeViewLink: 'https://github.com/avinasdube/listdown'
    },
    {
      id: 3,
      type: 'web application',
      pImage: weatherin,
      pName: 'weather.in',
      pDescrip: 'a live weather application built in react and nodejs which uses openweatherapp.org api to fetch live weather data. it also features light/dark mode button for better viewing experience.',
      pViewLink: 'https://avinasdube.github.io/weather.in/',
      codeViewLink: 'https://github.com/avinasdube/weather.in'
    },
    {
      id: 4,
      type: 'web application',
      pImage: calculator,
      pName: 'simple calculator app',
      pDescrip: 'a responsive calculator app with all basic functionalities',
      pViewLink: 'https://avinasdube.github.io/modern-calculator/',
      codeViewLink: 'https://github.com/avinasdube/modern-calculator'
    }
  ];

  ScrollAnimation();

  return (
    <div className='projectsSection'>
      <div className="projectsGrid">
        {projects.map(project => (
          <div className="projectCard"  key={project.id}>
            <div className="projectAbout">
              <div className="projectType">{project.type}</div>
              <div className="projectName">{project.pName}</div>
              <div className="projectDescrip">{project.pDescrip}</div>
              <div className="projectActions">
                <a href={project.pViewLink}>View Live Project</a>
                <a href={project.codeViewLink}>View Code</a>
              </div>
            </div>
            <div className="projectImage">
              <img src={project.pImage} alt='' />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectsSection;
