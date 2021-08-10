import React from 'react';

export default function Card(props) {
    return (
        <div className="projectPage_cards_item">
            <h1>{props.title}</h1>
            <h3>{props.language}</h3>
            <p>{props.content}</p>
            <div>
                <button><a href={props.gitURL}>
                    <img src="/resource/images/icons/Github.svg" alt="Github" />
                    <p>REPO</p>
                </a></button>
            </div>
        </div>
    )
}