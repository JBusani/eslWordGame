import React from 'react';
import './buttons.css';

const ResetButton = (props) => {
        return(
            <div>
                <button className="gamebutton" onClick={props.onReset}> Reset </button> 
            </div>
        )
};

export default ResetButton;