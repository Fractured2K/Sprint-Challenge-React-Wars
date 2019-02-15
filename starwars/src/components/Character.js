import React from 'react';

const Character = props => {
    return (
        <div className="character">
            <h1>{props.character.name}</h1>
            <p><span>Birth Year</span>: {props.character.birth_year}</p>
            <p><span>Eye Color</span>: {props.character.eye_color}</p>
        </div>
    )
}

export default Character;
