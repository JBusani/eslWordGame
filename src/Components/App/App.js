import React from 'react';
import './App.sass';
import GameWords from '../GameWords/GameWords';
import Timer from '../Timer/Timer';
import Rules from '../Rules/Rules';





class App extends React.Component{
   
 render(){
     return(
         <div className="home">
             <div>
                <h1>Word Finder GAME let's do it</h1>
            </div>
        <Timer />
        <GameWords />
        <Rules />
 
         </div>
     )
 }   
}

export default App;