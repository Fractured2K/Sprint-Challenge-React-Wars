import React from 'react';

import Character from './Character';

import './StarWars.css';


const CharacterList = props => {
    return (
        <div className="container">{props.characters.map(character => (
            <Character key={character.id} character={character} />
        ))}</div>
    )
}

export default CharacterList;
