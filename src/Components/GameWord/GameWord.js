import React, {useRef} from "react";
import './GameWord.scss';

function Gameword(props){
    console.log(props.start);
    const inputRef = useRef('');
    function submitWord(event){
        event.preventDefault();
        console.log(inputRef);
    } 
        return(
           <div>
               <p id="gameword" className="word">{props.gameword}</p>
               {props.start === true ? (
                <div>
                    <label> Enter words 
                        <input 
                            autoComplete="off"
                            value={inputRef.value}
                            ref={inputRef}
                            type="text" 
                            name="answer"
                            disabled={!props.start}
                            />
                    </label>
                    <button id="myBtn" value="Submit" type="submit" onSubmit={submitWord}> Enter </button>
                </div>) : ''}
            </div> 
        )
}

export default Gameword;