import React from 'react';
import './Project.css';
import Card from './Card'
export default function Projects() {
    return (
        <div className="projectPage">
            <h1>PROJECTS</h1>
            <div className="cards" id="Project">
                <Card title="FNOTE" language="MERN Stack" content="An instant note taking app with simple and UI" gitURL="https://github.com/ypratham/FNOTE" />
                <Card title="Collab Draw" language="RectJs" content="A collabrative drawing app" gitURL="https://github.com/ypratham/FNOTE" />
                <Card title="Article API" language="REST API" content="A API to get articles from database and also edit articles present in database" gitURL="https://github.com/ypratham/FNOTE" />
                <Card title="Discord Bot" language="Python" content="A discord bot with great commands to enhance the user experience while using discord" gitURL="https://github.com/ypratham/FNOTE" />
                <Card title="Diabetes Check" language="Python" content="A machine learning project to check wheatear the user has diabetes" gitURL="https://github.com/ypratham/FNOTE" />
            </div>
        </div>
    )
}