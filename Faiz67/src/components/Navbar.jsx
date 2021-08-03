import React from 'react'
import '../styles/navbar.css'
import {Link} from 'react-router-dom'

export const Navbar = () => {
    return (
        <div>
            <nav>
            <ul className="navbar">
                <li><Link to="">About Me</Link></li>
                <li><Link to="/projects">Previous Projects</Link></li>
                <li><Link to="/acadamics">Acadamic Background</Link></li>
                <li><Link to="/contact">Contact Me</Link></li>
            </ul>
        </nav>
        </div>
    )
}
