import React, {useState} from 'react';
import './App.sass';
import GameWords from '../GameWords/GameWords';
import Timer from '../Timer/Timer';
import Rules from '../Rules/Rules';
import Words from '../data/data';

class App extends React.Component{
   constructor(props){
       super(props);
       this.state = {
           levels: {}
       }
   }

   componentDidMount(){
       this.setState({
           levels: {...Words.level}
       })
   };
 render(){
    const Lvl = Object.keys(this.state.levels);
     return(
         <div className="home">
             <div>
                <h1>Word Game</h1>
            </div>
        <select>
            {Lvl.map((n)=>{
               return <option> {`Level ${n}`} </option>
            })}
        </select>
        <GameWords />
        
        <Timer />
        <Rules />
 
         </div>
     )
 }   
}

export default App;