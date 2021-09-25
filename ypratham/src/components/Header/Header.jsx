import React from 'react';
import './Header.css'

export default function App() {
    return (
        <header className="navbar">
            <nav className="navbar_nav">
                <ul className="navbar_navItems">
                    <li> <a href="#Home">
                        <img src="/resource/images/Home.svg" alt="home" />
                    </a> </li>
                    <li><a href="#About">
                        <img src="/resource/images/Person.svg" alt="about" />
                    </a></li>
                    <li><a href="#Skill">
                        <img src="/resource/images/Skills.svg" alt="skills" />
                    </a></li>
                    <li><a href="#Project">
                        <img src="/resource/images/Project.svg" alt="projects" />
                    </a></li>
                </ul>
            </nav>
        </header>
    )
}