import React, { useState, useRef } from 'react';
import './Input.css';
import Score from '../Scoreboard/score';
import validate from '../../methods/validate';

const Input = (props) => {
    const inputRef = useRef('');
    const [inputState, setinputState ] = useState(
        {
            value: '',
            answers: [],
            errors: []
        }
    );
    function onSubmit(event){
        event.preventDefault();
        if(props.word === ""){
            setinputState(inputState => ({
                errors: []
            }))
            return;
        }
        if(event.key === 'Enter' || event.target.value === "Submit"){
            const errors = validate(inputState.value, props.word);
            if (errors.length > 0){
                setinputState({errors});
                return;
            }
            setinputState(inputState => {
                const answers = inputState.answers.concat(inputState.value);
                return{
                    answers,
                    value: '',
                };
            });}   
};
    
    function clearAnswers(w){
      let answers = inputState.answers;
      let word = w;
      while(answers.length && word === ""){
          answers.pop();
        }
      };
    
        const {errors} = inputState;
        let AnswerList = inputState.answers;
        let Gameword = document.getElementById("gameword");
        return(
            <div>
                
                <div>
                    <label> Enter words 
                        <input 
                            autoComplete="off"
                            value={inputState.value}
                            onKeyPress={onSubmit}
                            ref={inputRef}
                            type="text" 
                            name="answer"
                            />
                    </label>
                    <button id="myBtn" value="Submit" type="submit" onClick={onSubmit}> Enter </button>
                </div>
                <div>
                    {errors.map(error => (
                        <p key={error}> Error: {error} </p>
                    ))}
                </div>
                <div className="Answers">
                    {clearAnswers(props.word)}
                    {AnswerList.map(answer => <div className="answer" key={answer} >  {answer} </div>)}
                </div>
                <div>
                <Score elements={AnswerList.length}/>
                </div>
            </div>
        )
}
export default Input;