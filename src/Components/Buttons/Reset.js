import React from 'react';
import './buttons.css';

class ResetButton extends React.Component{
    render(){
        return(
            <div>
                <button className="gamebutton" onClick={this.props.onReset}> Reset </button> 
            </div>
        )
    }
};

export default ResetButton;