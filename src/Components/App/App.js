import React from 'react';
import './App.sass';
import GameWords from '../GameWords/GameWords';
import Timer from '../Timer/Timer';
import Rules from '../Rules/Rules';
import Levels from '../data/data';

//SHOULD MAYBE CHANGE OPTIONS TO <optgroup label="(theme)"> <option ...> instead of having multiple select fields
//LEVEL 1
//   THEME
//   THEME
//LEVEL 2
//   THEME
//   THEME

class App extends React.Component{
   constructor(props){
       super(props);
       this.state = {
           levels: {},
           chapter: {}
       }
       this.chapterSelect = this.chapterSelect.bind(this);
   }

   chapterSelect(event){
       const levelNumber = event.target.value;
       const chpt = this.state.levels[levelNumber];

         this.setState({
            chapter: chpt
        })
   }

   componentDidMount(){
       this.setState({
           levels: {...Levels}
       })
   };
 render(){
    const Lvl = Object.keys(this.state.levels);
    const themes = Object.keys(this.state.chapter);

    console.log(this.state.chapter);
     return(
         <div className="home">
             <div>
                <h1>Word Game</h1>
            </div>
        
        <select onChange={this.chapterSelect}>
            {Lvl.map((n)=>{
               return <option key={`lvl${n}`} value={n}> {`Level ${n}`} </option>
            })}
        </select>
        <div>
            {themes.map((t)=>{
                return <h2 key={t}>{t}</h2>
            })}
        </div>
        <GameWords />
        
        <Timer />
        <Rules />
 
         </div>
     )
 }   
}

export default App;