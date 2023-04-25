//create a reactjs component called game
import React from "react";
import { useStore } from "../../Context/Store";

//create a function that takes in the props
export default function Game(props) {
    //get the state and dispatch from the store
    const { state: {
        word,
       
    },  } = useStore();
    //split the word into an array
    //const wordArray = word.split("");
    
    return (
        <div>
            <h3 style={{textAlign: 'center'}}>{word.toUpperCase()}</h3>

        </div>
    )
};