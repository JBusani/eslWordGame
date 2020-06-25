import React from 'react';
import './App.sass';
import GameWords from '../GameWords/GameWords';
import Timer from '../Timer/Timer';
import Rules from '../Rules/Rules';
import Data from '../data/data';



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
           levels: {...Data.level}
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
            {Lvl.map((n)=>{
               return <option key={`lvl${n}`} value={n}> {`Level ${n}`} </option>
            })}
        </select>
        <div>
            Choose a theme:
            {themes.map((t)=>{
                return <button key={t} value={t} onClick={this.handleTheme}> {t} </button> 
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