import React from 'react';

import Character from './Character';

import './StarWars.css';


const CharacterList = props => {
    return (
        <div>
            <div className="container">
                {props.characters.map(character => (
                    <Character key={character.id} character={character} />
                ))}
            </div>

            <button onClick={props.nextChars}>Next</button>
        </div>
    )
}

export default CharacterList;
