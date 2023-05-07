//create a reactjs component called game
import React, {useState} from "react";
import { useStore } from "../../Context/Store";
import { setSubmittedAnswers, setWord, setScore, resetSubmittedAnswers } from "../../Reducers/reducer";
import "./game.css";
import { checkWord } from "../../Api/getWord";
//create a function that takes in the props
export default function Game(props) {
    const [error, setError ] = useState('');
    const [showSubmitted, setShowSubmitted] = useState(false);
    const [disable, setDisable ] = useState(false);

    const { state: {
        word,
        submittedAnswers,
        score,
    }, dispatch } = useStore();
    //split the word into an array
    const wordArray = word.split("");
    //create a use state hook that holds an array that tells us which letters have been clicked
    const [clickedLetters, setClickedLetters] = useState([]);
    //function adds the letter to the clicked letters array
    const addLetter = (index) => {
        //if error is not empty clear the error
        if(error.length > 0){setError([]);};
        //setClickedLetters([...clickedLetters, {index, letter: wordArray[index]}]);
        setClickedLetters([...clickedLetters, index]);
    };
    const newWord = () => {
        //clear submitted answers
        dispatch(resetSubmittedAnswers([]));
        //clear score
        dispatch(setScore(0));
        //set the index to the next word
        dispatch(setWord());
        //clear the clicked letters array
        clearLetters();
        //set the showSubmitted to false
        showSubmittedBox(false);
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
        setError(``);
        setClickedLetters([]);
    };
    //function that submits the answer to dispatch to the store
    const submitAnswer = async (event) => {
        event.preventDefault();
        setDisable(true);
        setError(``);
        //check that the clicked letters array is not empty
        if(clickedLetters.length === 0){
            setError("You haven't selected any letters");
            setDisable(false);
            return;};
        
        //check that clicked letters joined doesn't not equal the word array joined
        const exactMatch = word === clickedLetters.map((letter) => wordArray[letter]).join('');
        if(exactMatch){
            setError("Can't submit that word");
            setDisable(false);
        return;
        };
        
        //check if word is already submitted
        const alreadySubmitted = submittedAnswers.includes(clickedLetters.map((letter) => wordArray[letter]).join(''));
        if(alreadySubmitted){
            setError("You've already submitted that word");
            setDisable(false);
            return;};

        const check = await checkWord(clickedLetters.map((letter) => wordArray[letter]).join(''));
        if(check?.success === false){
            setError("That's not a word");
            setDisable(false);
            return;
        }
            //create a string from clicked letters
            const answer = clickedLetters.map((letter) => wordArray[letter]).join("");
            dispatch(setSubmittedAnswers(answer));
            dispatch(setScore(score + 1));
            clearLetters();
            setDisable(false);
    };

    return (
        <div>

            <h3 style={{textAlign: 'center'}}>{word.toUpperCase()}</h3>
            <div className="userAnswer">
                {clickedLetters.map((letter, index) => {
                    return <button
                    disabled={disable} 
                    onClick={() => removeLetter(letter)}
                    key={index}
                    className="letter">
                        {wordArray[letter]}
                    </button>
                    
                    }
                )}
            </div>

            <p style={{color: 'red', textAlign: 'center'}}>{error}</p>
            <div className="flex">
              <button disabled={disable} onClick={clearLetters} className="clearButton">Clear</button>
              <button disabled={disable} className="submitButton" onClick={submitAnswer}>Submit</button>
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
                <button 
                disabled={disable}
                onClick={
                    //remove the last letter from the clicked letters array and return the new array to clickedLetters
                    () => setClickedLetters(clickedLetters.slice(0, -1))}>
                        Delete
                </button>
            </div>
            <div className={`submittedBox ${showSubmitted ? 'showBox' : null}`} >
                <div style={{background: 'var(--bg-color)', padding: '0px 20px'}}>

                <svg onClick={()=>showSubmittedBox(!showSubmitted)} className={`upArrowIcon ${showSubmitted ? 'rotate' : null} `} width="50" height="50" viewBox="0 0 50 50" fill="none" >
                    <path d="M39.5834 27.0834L25.0001 14.5834L10.4167 27.0834" stroke="#FFE4C4" strokeWidth="3.125" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M39.5834 35.4167L25.0001 22.9167L10.4167 35.4167" stroke="#FFE4C4" strokeWidth="3.125" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h5 style={{textAlign: 'center', marginTop: '0px', marginBottom: '0px'}}>Submitted Answers <br/> {`(${submittedAnswers.length})`}</h5>
                </div>

                <div className={` ${showSubmitted ? 'show' : 'hide'} submittedAnswers`}>
                    {submittedAnswers.map((answer, index) => {
                        return <p key={index}>{answer}</p>
                    })}
                </div>
            
            </div>
            <div>
                <button disabled={disable} onClick={newWord}>new word</button>
            </div>
        </div>
    )
};