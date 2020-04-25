import React from 'react';
import './App.sass';
import GameWords from '../GameWords/GameWords';
import Timer from '../Timer/Timer';






class App extends React.Component{
   
 render(){
     return(
         <div className="home">
             <div>
                <h1>Find Words within the Words</h1>
            </div>
        <Timer />
        <GameWords />
         </div>
     )
 }   
}

export default App;