import React from 'react';

import Character from './Character';
import Buttons from './Buttons';

import './StarWars.css';


const CharacterList = props => {
    return (
        <div>
            <div className="container">
                {props.characters.map(character => (
                    <Character key={character.id} character={character} />
                ))}
            </div>

            <Buttons
                prevCharsState={props.prevCharsState}
                prevChars={props.prevChars}
                nextCharsState={props.nextCharsState}
                nextChars={props.nextChars}
            />
        </div>
    )
}

export default CharacterList;
