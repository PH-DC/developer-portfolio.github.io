import React from 'react';
import './Home.css'
import LandingPage from './FirstPage/LandingPage';
import About from './AboutPage/About';
import Skills from './Skills/Skills'
import Projects from './Project/Projects';
import Footer from './Footer/Footer';

export default function Home() {
    return (
        <main className="mainPage">
            <LandingPage />
            <About />
            <Skills />
            <Projects />
            <Footer />
        </main>
    )
}