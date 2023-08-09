// IMPORTING NECESSARY DEPENDENCIES

import './style.scss';

import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import NavigationSection from './components/NavigationSection/NavigationSection';
import WelcomeSection from './components/WelcomeSection/WelcomeSection';
import ExpertiseSection from './components/ExpertiseSection/ExpertiseSection';
import IllustrationSection from './components/IllustrationSection/IllustrationSection';
import QuoteSection from './components/QuoteSection/QuoteSection';
import AchievementSection from './components/AchievementSection/AchievementSection';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import FooterSection from './components/FooterSection/FooterSection';

import { useEffect, useState } from 'react';

function App() {

  // CODE TO IMPLEMENT LOADING SCREEN 

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3145);
  }, []);

  return (
    <>
      {loading ? <LoadingScreen /> :

        (<div className="app">
          <NavigationSection />
          <WelcomeSection />
        </div>)}
    </>
  )
}

export default App;