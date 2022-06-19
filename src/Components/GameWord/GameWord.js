import React from "react";
import './GameWord.scss';
import Input from '../Input/Input';

function Gameword(props){
        return(
           <div>
               <p id="gameword" className="word">{props.gameword}</p>
               <Input  word={props.gameword} />
            </div> 
        )
}

export default Gameword;