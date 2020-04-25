import React from 'react';

class StartButton extends React.Component{

    render(){

        return(
            <button onClick={this.props.onClick}> Start! </button>
        )
    }
};

export default StartButton;