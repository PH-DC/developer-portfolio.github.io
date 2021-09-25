import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage'; 
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <LandingPage/>
    <AboutMe/>
    <Skills/>
    <Projects/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);