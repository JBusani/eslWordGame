import React from 'react';
import Layout from '../Layout/Layout';
import GameWord from '../GameWord/GameWord';
import Timer from '../Timer/Timer';
import Rules from '../Rules/Rules';
import Data from '../data/data';
import StartButton from '../Buttons/Start';
import ResetButton from '../Buttons/Reset';
import Input from '../Input/Input';
import './App.css';


class App extends React.Component{
   constructor(props){
       super(props);
       this.state = {
           themes: Data.themes,
           theme: "",
           gameword: "",
           errors: "",
       }
       this.themeSelect = this.themeSelect.bind(this);
       this.gamewordSelect = this.gamewordSelect.bind(this);
       this.onReset= this.onReset.bind(this);
    }
    componentDidMount(){
        this.setState({
            themes: {...Data.themes},
            theme: "",
            gameword: ""
        })
    };
   themeSelect(event){
    let theme = event.target.value;    

    this.setState(state => ({
            theme: theme,
            errors: "",
            gameword: "",
        }));
        console.log(`Your previous theme was ${this.state.theme}`)
   };
   gamewordSelect(){
    let theme = this.state.theme;

    if(this.state.errors === "Please select a new theme" || theme === ""){
        console.log(this.state);
        return;
    };
    
    let array = this.state.themes[theme].words;
    const number = Math.floor(Math.random() * array.length);

    this.setState(state => ({
        gameword: array[number]
    }));
   }
   onReset(){
    this.setState(state => ({
        themes: Data.themes,
        theme: "",
        gameword: '',
        errors: "Please select a new theme"
    }));
    function set(){
        document.getElementById("default").selected = "true";
    };
    set();
    console.log(this.state)
};

 render(){
    const Themes = Object.keys(this.state.themes);
     return(
         <Layout>
            <p> Choose a theme. Then, Click Start. </p>
            <div className="dropdown">
                    <select id="themeDropdown" defaultValue="Select a Theme" onChange={this.themeSelect}>
                    <option id="default" value="Select a Theme" > Select Your Theme </option>
                    {Themes.map((n)=>{
                        return <option key={`${n}`} value={n}> {`${n}`} </option>
                    })}
                </select>
            </div>
            <div>
                {this.state.errors}
            </div>
            <div className="buttonContainer">
                <StartButton onClick={this.gamewordSelect}></StartButton>
                <ResetButton onReset={this.onReset} /> 
            </div>
            
            <GameWord gameword={this.state.gameword} />

            
         </Layout>
     )
    }   
};

export default App;

