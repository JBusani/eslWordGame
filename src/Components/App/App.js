import React from 'react';
import './App.sass';
import GameWords from '../GameWords/GameWords';
import Timer from '../Timer/Timer';
import Rules from '../Rules/Rules';
import Level from '../Level/level';




class App extends React.Component{
   
 render(){
     return(
         <div className="home">
             <div>
                <h1>Word Game</h1>
            </div>
        <Level />
        <Timer />
        <GameWords />
        <Rules />
 
         </div>
     )
 }   
}

export default App;