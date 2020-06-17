import React from 'react';

class Scoreboard extends React.Component{
    
    render(){

        return(
          <div>
            <h1> Score: </h1>
            <p> {this.props.elements} </p> 
          </div>
        )
    }
};

export default Scoreboard;