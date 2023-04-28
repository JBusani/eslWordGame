//create a reactjs component called game
import React, {useState} from "react";
import { useStore } from "../../Context/Store";
import { setSubmittedAnswers } from "../../Reducers/reducer";
import "./game.css";
//create a function that takes in the props
export default function Game(props) {
    const [error, setError ] = useState('');
    const [showSubmitted, setShowSubmitted] = useState(false);

    const { state: {
        word,
        submittedAnswers
    }, dispatch } = useStore();
    //split the word into an array
    const wordArray = word.split("");
    //create a use state hook that holds an array that tells us which letters have been clicked
    const [clickedLetters, setClickedLetters] = useState([]);
    console.log({clickedLetters,})
    //function adds the letter to the clicked letters array
    const addLetter = (index) => {
        //if error is not empty clear the error
        if(error.length > 0){setError([]);};
        //setClickedLetters([...clickedLetters, {index, letter: wordArray[index]}]);
        setClickedLetters([...clickedLetters, index]);
    };
    const showSubmittedBox = (bool) => {
        setShowSubmitted(bool);
    };
    //removes the index from the clicked letters array
    const removeLetter = (index) => {
        setClickedLetters(clickedLetters.filter((letter) => letter !== index));
    };
    //clear all clicked letters
    const clearLetters = () => {
        setClickedLetters([]);
    };
    //function that submits the answer to dispatch to the store
    const submitAnswer = () => {
        //check that the clicked letters array is not empty
        if(clickedLetters.length === 0){setError("You haven't selected any letters");return;};
        //check that clicked letters joined doesn't not equal the word array joined
        const exactMatch = word === clickedLetters.map((letter) => wordArray[letter]).join('');
        if(exactMatch){setError("Can't submit that word");return;};

        //create a string from clicked letters
        const answer = clickedLetters.map((letter) => wordArray[letter]).join("");
        dispatch(setSubmittedAnswers(answer));
        clearLetters();
    };

    return (
        <div>

            <h3 style={{textAlign: 'center'}}>{word.toUpperCase()}</h3>
            <div className="userAnswer">
                {clickedLetters.map((letter, index) => {
                    return <button 
                    onClick={() => removeLetter(letter)}
                    onKeyDown={console.log("key down")} 
                    key={index}
                    className="letter">
                        {wordArray[letter]}
                    </button>
                    
                    }
                )}
            </div>

            <p style={{color: 'red', textAlign: 'center'}}>{error}</p>
            <div className="flex">
              <button onClick={clearLetters} className="clearButton">Clear</button>
              <button className="submitButton" onClick={submitAnswer}>Submit</button>
            </div>
            <div className="buttonContainer">
                {wordArray.map((letter, index) => {
                    //return a button that size transitions from small to large
                    const clicked = clickedLetters.includes(index);    
                    return (
                        <button 
                        disabled={clicked} 
                        onClick={() => addLetter(index)} 
                        key={index}
                        style={{backgroundColor : clicked ? "gray" : "var(--font-color)", color: clicked ? "darkgray" : "var(--bg-color)", border: clicked ? "1px solid var(--bg-color)" : "1px solid var(--font-color)"}}
                        className="letter">
                        {letter}
                    </button>
                )
            }
            )}
            </div>
            <div className={`submittedBox ${showSubmitted ? 'showBox' : null}`} >
                <div style={{background: 'var(--bg-color)', padding: '0px 20px'}}>

                <svg onClick={()=>showSubmittedBox(!showSubmitted)} className={`upArrowIcon ${showSubmitted ? 'rotate' : null} `} width="50" height="50" viewBox="0 0 50 50" fill="none" >
                    <path d="M39.5834 27.0834L25.0001 14.5834L10.4167 27.0834" stroke="#FFE4C4" stroke-width="3.125" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M39.5834 35.4167L25.0001 22.9167L10.4167 35.4167" stroke="#FFE4C4" stroke-width="3.125" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h5 style={{textAlign: 'center', marginTop: '0px', marginBottom: '0px'}}>Submitted Answers <br/> {`(${submittedAnswers.length})`}</h5>
                </div>

                <div className={` ${showSubmitted ? null : 'hide'} submittedAnswers`}>
                    {submittedAnswers.map((answer, index) => {
                        return <p key={index}>{answer}</p>
                    })}
                </div>
            
            </div>
        </div>
    )
};