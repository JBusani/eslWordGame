import React from "react";
import './GameWord.scss';
import Input from '../Input/Input';

function Gameword(){
        return(
           <div>
               <p id="gameword" className="word">{this.props.gameword}</p>
               <Input  word={this.props.gameword} />
            </div> 
        )
}

export default Gameword;