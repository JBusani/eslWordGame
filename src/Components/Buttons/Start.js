import React from 'react';
import './buttons.css';

class StartButton extends React.Component{

    render(){

        return(
            <button className="gamebutton" onClick={this.props.onClick}> Start! </button>
        )
    }
};

export default StartButton;