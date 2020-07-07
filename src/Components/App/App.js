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
           themes: Data.themes,
           theme: ""
       }
       this.themeSelect = this.themeSelect.bind(this);
   }

   themeSelect(event){
       const theme = event.target.value;
        if(theme === ""){
            return;
        }else{
         this.setState({
            theme: theme
        })}
   }

   componentDidMount(){
       this.setState({
         themes: {...Data.themes},
       })
   };
 render(){
    const Lvl = Object.keys(this.state.themes);

     return(
         <div className="home">
             <div>
                <h1>Word Game</h1>
            </div>
        
        <select onChange={this.themeSelect}>
            <option value=""> Select Your Theme </option>
            {Lvl.map((n)=>{
               return <option key={`${n}`} value={n}> {`${n}`} </option>
            })}
            {console.log(this.state.theme)}
        </select>
            <p> Choose a theme. Then, Click Start. </p>

        <GameWords theme={this.state.theme} />
        
        <Timer />
        <Rules />
 
         </div>
     )
 }   
}

export default App;