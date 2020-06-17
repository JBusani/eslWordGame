import React from 'react';
import './buttons.css';

class ResetButton extends React.Component{

    render(){
        return(
                <button className="gamebutton" onClick={this.props.onReset}> Reset </button> 
        )
    }
};

export default ResetButton;