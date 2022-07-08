import React, {useRef} from "react";
import './GameWord.scss';
import Input from '../Input/Input';
function Gameword(props){
    const { gameword, start } = props;

    const inputRef = useRef('');
    console.log(inputRef);
        return(
           <div>
               <p id="gameword" className="word">{gameword}</p>
               {start === true ? <Input start={start} gameword={gameword} /> : ''}
            </div> 
        )
}

export default Gameword;