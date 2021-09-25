import React from 'react';
import './Footer.css';
import {instagram as Instagram, mail as Mail, linkedinf as Linkedin,}  from '../icons/githubicons';

export default function Footer () {
    const year = new Date().getFullYear();
    return(
        <sec id="Footer">
            <h2>Deep</h2>

            <div className="logo">
                <Instagram/>
                <Mail/>
                <Linkedin/>
            </div>

            <p>©{year} copyright all rights reserved</p>
        </sec>
    )
}
