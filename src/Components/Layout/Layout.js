import React from 'react';
//styles
import "./Layout.css"

//store and reducers
import { useStore } from '../../Context/Store';
import { setGamestart,setWord } from '../../Reducers/reducer';

//components
import Rules from '../Rules/Rules';
import Game from '../GamePlay/game';
import Scoreboard from '../Scoreboard/scoreboard';

function Layout(props){
    //console log the store from context
    const { state: { 
        word, 
        data, 
        score, 
        time, 
        highscore, 
        gameover, 
        gamestart 
    }, dispatch } = useStore();
    //console.log the destructured state
    console.log(word, data, score, time, highscore, gameover, gamestart);
    //create a function that dispatch to gamestart to true
    const startGame = () => {
        dispatch(setWord(data[0]))
        dispatch(setGamestart(true));
    };


    return (
        <div className="home" >
            {gamestart ? (
            <>
              <Scoreboard />
              <Game />
            </>
            ) : (
            <div style={{textAlign: 'center'}}>
              <h1 style={{textAlign: 'center'}}>Word Game</h1>
              <Rules />
              <button onClick={startGame}>Start</button>
            </div>
            )
        }
                    

            {props.children}
        </div>
    )
};

export default Layout;