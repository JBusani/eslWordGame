import React from 'react';

class AnswerBox extends React.Component{
    render(){
        return(
            <div>
                <p> {this.props.words} </p>
            </div>
        )
    }
};

export default AnswerBox;