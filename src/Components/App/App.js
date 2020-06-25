import React from 'react';
import './App.css';
import GameWords from '../GameWords/GameWords';
import Timer from '../Timer/Timer';
import Rules from '../Rules/Rules';
import Data from '../data/data';

//Issues:
/*
    the focus is lost once you press start
    the reset only resets the game word. Not the array.
    on load, with no level or theme selected, pressing start causes an error
    levels should be different. Level 1 should have the bigger words
*/

class App extends React.Component{
   constructor(props){
       super(props);
       this.state = {
           levels: Data.level,
           levelNumber: {},
           themes: {},
           theme: {}
       }
       this.themeSelect = this.themeSelect.bind(this);
       this.handleTheme = this.handleTheme.bind(this);
   }

   themeSelect(event){
       const levelNumber = event.target.value;
       const themes = this.state.levels[levelNumber];

         this.setState({
            levelNumber: levelNumber,
            themes: themes
        })
   }

   handleTheme(event){
       const theme = event.target.value;
        console.log(theme);
       this.setState({
           theme: theme
       })
   }
   componentDidMount(){
       this.setState({
         levels: {...Data.level},
       })
   };
 render(){
    const Lvl = Object.keys(this.state.levels);
    const themes = Object.keys(this.state.themes);

     return(
         <div className="home">
             <div>
                <h1>Word Game</h1>
            </div>
        
        <select onChange={this.themeSelect}>
            <option value="1"> Select Your Level </option>
            {Lvl.map((n)=>{
               return <option key={`lvl${n}`} value={n}> {`Level ${n}`} </option>
            })}
        </select>
        <div>
            <p> Choose a theme. Then, Click Start. </p>
            {themes.map((t)=>{
                return <button className="themes" key={t} value={t} onClick={this.handleTheme}> {t} </button> 
            })}
        </div>
        <GameWords levelNumber={this.state.levelNumber} theme={this.state.theme} />
        
        <Timer />
        <Rules />
 
         </div>
     )
 }   
}

export default App;