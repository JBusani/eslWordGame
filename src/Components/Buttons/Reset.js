import React from 'react';

class ResetButton extends React.Component{

    render(){
        return(
                <button onClick={this.props.onReset}> Reset </button> 
        )
    }
};

export default ResetButton;