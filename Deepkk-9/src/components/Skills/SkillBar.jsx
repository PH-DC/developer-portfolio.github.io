import React from 'react';
import './Skills.css'



export default function SkillBar(props) {
    return (
        <li className={`icons_item ${props.score}`}>

            <img src={props.src} alt="skills_icon" />

            <p>
                {props.skill}
            </p>
        </li>
    )
}