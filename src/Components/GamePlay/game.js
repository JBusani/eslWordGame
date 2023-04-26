//create a reactjs component called game
import React, {useState} from "react";
import { useStore } from "../../Context/Store";
import { setSubmittedAnswers } from "../../Reducers/reducer";
import "./game.css";
//create a function that takes in the props
export default function Game(props) {
    const { state: {
        word,
        
    }, dispatch } = useStore();
    //split the word into an array
    const wordArray = word.split("");
    //create a use state hook that holds an array that tells us which letters have been clicked
    const [clickedLetters, setClickedLetters] = useState([]);
    console.log({clickedLetters,})
    //function adds the letter to the clicked letters array
    const addLetter = (index) => {
        //setClickedLetters([...clickedLetters, {index, letter: wordArray[index]}]);
        setClickedLetters([...clickedLetters, index]);
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
        //create a string from clicked letters
        const answer = clickedLetters.map((letter) => wordArray[letter]).join("");
        console.log({answer});
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
            <button 
                className="submitButton"
                onClick={submitAnswer}
            >Submit</button>
            <div className="buttonContainer">
                <button onClick={clearLetters} className="clearButton">Clear</button>
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
        </div>
    )
};