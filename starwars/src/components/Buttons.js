import React from 'react';

const Buttons = props => {
    return (
        <div>
            {props.prevCharsState === null ? null : <button onClick={props.prevChars}>Previous</button>}
            {props.nextCharsState === null ? null : <button onClick={props.nextChars}>Next</button>}
        </div>
    )
}

export default Buttons;
