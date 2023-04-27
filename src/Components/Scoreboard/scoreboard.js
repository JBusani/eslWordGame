//a score component that reads the score from the store
// Path: src\Components\Scoreboard\scoreboard.js
import React, { useEffect } from 'react';
import { useStore } from '../../Context/Store';
import "./scoreboard.css";

function Scoreboard(props){
    const { state: { score, highscore, gameover, gamestart } } = useStore();
    //use animateScore to animate the score every time the score changes in the store
    useEffect(() => {
        //if the game is over don't animate the score
        if(gameover){return;};
        //if the game has not started don't animate the score
        if(!gamestart){return;};
        //if the score is 0 don't animate the score
        if(score === 0){return;};
        //if the score has updated animate the score using getElementbyID
        const scoreElement = document.getElementById('score');
        //add the score className to the score element
        scoreElement.classList.add('score');
        

        //set a timeout to remove the score class from the score element
        setTimeout(() => {
            scoreElement.classList.remove('score');
        }, 1000);
    }, [score, gameover, gamestart]);
    return (
        <div className="scoreboard">
            <h6>Highscore: {highscore}</h6>
            <div style={{display: 'inline-flex', gap: '1em'}}>
                <h6 >Score:</h6>
                <h6 id='score' className="" >{score}</h6>
            </div>

        </div>
    )
};

export default Scoreboard;