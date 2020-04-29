import React from 'react';
import './Rules.sass';



class Rules extends React.Component{

    render(){
        return (

            <div className="ruleplay">
                <div>
                    <h1> RULES: </h1>
                    <ol>
                        <li> Must use at least one letter from the gameword  </li>
                        <li> Must be English words  </li>
                    </ol>
                </div>
                <div>
                    <h1> HOW TO PLAY: </h1>
                    <ul>
                        <li> Press start. </li>
                        <li> Use the letters in the gameword to create a new word. </li>
                        <li> To end the game: Press Reset </li>
                        <li> Timer for a Challenge! </li>
                    </ul>
                </div>
                <div>
                    <h1> SCORING </h1>
                    <ul>
                        <li> Each word = 1 point </li>
                        <li> Words will only count once. Example: "Game" and "Game" = 1 point. </li> 
                    </ul>
                </div>
            </div>
        )
    }
}

export default Rules;