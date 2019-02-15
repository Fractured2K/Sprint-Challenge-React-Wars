import React from 'react';
import './StarWars.css';


const CharacterList = props => {
    return (
        <div>{props.characters.map(character => (
            character.name
        ))}</div>
    )
}

export default CharacterList;
