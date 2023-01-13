import React, { useState, useRef } from 'react';
import './Input.css';
import Score from '../Scoreboard/score';
import validate from '../../methods/validate';

const Input = (props) => {
    const { start, gameword } = props;
    const [inputState, setinputState ] = useState(
        {
            value: '',
            answers: [],
            errors: []
        }
    );
    const {errors} = inputState;
    let AnswerList = inputState.answers;
    function handleInputChange(event){
        setinputState(prevState => ({
            ...prevState,
            value: event.target.value,
            errors: []
        }))
    }
    
    //submit input to state after validation
    function onSubmit(event){
        event.preventDefault();
        console.log("Submitted")
        if(gameword === ""){
            setinputState(inputState => ({
                ...inputState,
                errors: []
            }))
            return;
        }
        //upon enter, validate the inputed word string. if errors, return errors to the state. otherwise continue to set the inputState with updated word and clear the value
            
            const errors = validate(inputState.value, gameword, inputState.answers);
            
            if (errors.length > 0){
                setinputState(prevState => ({
                    ...prevState,
                    errors: errors}))
                return;
            }
            
            setinputState(inputState => {
                const answers = inputState.answers.concat(inputState.value);
                return{
                    ...inputState,
                    errors: [],
                    answers,
                    value: '',
                };
            });

            return;
};
    
    function clearAnswers(w){
      let answers = inputState.answers;
      let word = w;
      while(answers.length && word === ""){
          answers.pop();
        }
      };
    
        return(
            <div>
                <div>
                    <form onSubmit={onSubmit}>
                    <label> Enter words 
                        <input 
                            autoComplete="off"
                            autoFocus={start}
                            value={inputState.value}
                            type="text" 
                            name="answer"
                            disabled={!start}
                            onChange={handleInputChange}
                            />
                    </label>
                    <button type="submit" id="enterKey" > Enter </button>
                    </form>
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