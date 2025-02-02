// IMPORTING NECESSARY DEPENDENCIES

import './style.scss';

import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import NavigationSection from './components/NavigationSection/NavigationSection';

import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import { useEffect, useState } from 'react';
import AboutMe from './components/About/AboutMe';
import Layout from './layout/Layout';
import FooterSection from './components/FooterSection/FooterSection';

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
          <Router>
            <NavigationSection />
            <Routes>
              <Route exact path="/" element={<Layout />} />
              <Route path="/about" element={<AboutMe />} />
            </Routes>
            <FooterSection />
          </Router>
        </div>)}
    </>
  )
}

export default App;
