import React from 'react';
import './buttons.css';

const StartButton = (props) => {
    return(
        <div>
            <button className="gamebutton" onClick={props.onClick}>Start</button>
        </div>
    )
};

export default StartButton;