import React from 'react';
import "./Layout.css"
import { useStore } from '../../Context/Store';
import { 
    setGamestart,
    setWord,
  } from '../../Reducers/reducer';
import Rules from '../Rules/Rules';
import Game from '../GamePlay/game';
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
                <h1 style={{textAlign: 'center'}}>Word Game</h1>
                    {gamestart ? (
                    <>
                    <p style={{textAlign: 'center'}}>Game Started</p>
                        <Game />
                    </>
                    ) : (
                    <div style={{textAlign: 'center'}}>
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