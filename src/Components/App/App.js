import React from 'react';
import './App.css';
import GameWords from '../GameWords/GameWords';
import Timer from '../Timer/Timer';
import Rules from '../Rules/Rules';
import Data from '../data/data';

//Issues:
/*

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
    let theme = event.target.value;    
    this.setState({
            theme: theme
        });
   }

   componentDidMount(){
       this.setState({
         themes: {...Data.themes},
         theme: "Select Your Theme"
       })
   };
 render(){
    const Lvl = Object.keys(this.state.themes);

     return(
         <div className="home">
             <div>
                <h1>Word Game</h1>
            </div>
        {console.log(this.state.theme)}
        <select onChange={this.themeSelect}>
            <option value="Select Your Theme" onChange={this.themeSelect}> Select Your Theme </option>
            {Lvl.map((n)=>{
               return <option key={`${n}`} value={n}> {`${n}`} </option>
            })}
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