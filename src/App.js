// IMPORTING NECESSARY DEPENDENCIES

import './style.scss';

import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import NavigationSection from './components/NavigationSection/NavigationSection';
import WelcomeSection from './components/WelcomeSection/WelcomeSection';
import QuoteSection from './components/QuoteSection/QuoteSection';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import FooterSection from './components/FooterSection/FooterSection';

import { useEffect, useState } from 'react';
import ResumeSection from './components/ResumeSection/ResumeSection';

function App() {

  // CODE TO IMPLEMENT LOADING SCREEN 

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? <LoadingScreen /> :

        (<div className="app">
          <NavigationSection />
          <WelcomeSection />
          <ResumeSection />
          <ProjectsSection />
          <QuoteSection />
          <FooterSection />
        </div>)}
    </>
  )
}

export default App;
