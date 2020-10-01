import React from "react";
import './GameWord.scss';



class Gameword extends React.Component{
    render(){
        return(
           <div>
               <p className="word">{this.props.gameword}</p>
            </div> 
        )
    }
}

export default Gameword;