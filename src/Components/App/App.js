import React, {useEffect, useState} from 'react';
import Layout from '../Layout/Layout';
import GameWord from '../GameWord/GameWord';
import Timer from '../Timer/Timer';
import Rules from '../Rules/Rules';
import Data from '../data/data';
import StartButton from '../Buttons/Start';
import ResetButton from '../Buttons/Reset';
import Input from '../Input/Input';
import './App.css';


const App = () => {
    const [state , setState] = useState({
        themes: Data.themes,
        theme: "",
        gameword: "",
        errors: "",
    })
    
    useEffect(()=> {
        setState({
            themes: {...Data.themes},
            theme: "",
            gameword: "",
            errors: "",
        })
    },[])

   function themeSelect(event){
    console.log("Appjs please complete themeSelect Function");

   };
   function gamewordSelect(){
    let theme = state.theme;

    if(state.errors === "Please select a new theme" || theme === ""){
        console.log(state);
        return;
    };
    
    let array = state.themes[theme].words;
    const number = Math.floor(Math.random() * array.length);

    setState(state => ({
        gameword: array[number]
    }));
   }
   function onReset(){
    setState(state => ({
        themes: Data.themes,
        theme: "",
        gameword: '',
        errors: "Please select a new theme"
    }));
    function set(){
        document.getElementById("default").selected = "true";
    };
    set();
    console.log(state)
};
    const Themes = Object.keys(state.themes);
     return(
         <Layout>
            <p> Choose a theme. Then, Click Start. </p>
            <div className="dropdown">
                    <select id="themeDropdown" defaultValue="Select a Theme" onChange={themeSelect}>
                    <option id="default" value="Select a Theme" > Select Your Theme </option>
                    {Themes.map((n)=>{
                        return <option key={`${n}`} value={n}> {`${n}`} </option>
                    })}
                </select>
            </div>
            <div>
                {state.errors}
            </div>
            <div className="buttonContainer">
                <StartButton onClick={gamewordSelect}></StartButton>
                <ResetButton onReset={onReset} /> 
            </div>
            
            <GameWord gameword={state.gameword} />

            
         </Layout>
     )
}

export default App;

