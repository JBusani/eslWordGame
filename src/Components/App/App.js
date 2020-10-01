import React from 'react';
import '../Layout/Layout.css'
import Layout from '../Layout/Layout';
import GameWord from '../GameWord/GameWord';
import Timer from '../Timer/Timer';
import Rules from '../Rules/Rules';
import Data from '../data/data';
import StartButton from '../Buttons/Start';
import ResetButton from '../Buttons/Reset';


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
            theme: "Classroom",
            gameword: ""
        })
    };
   themeSelect(event){
    let theme = event.target.value;    

    this.setState(state => ({
            theme: theme,
            errors: "",
        }));
        console.log(`Your previous theme was ${this.state.theme}`)
   };
   gamewordSelect(){
    let theme = this.state.theme;

    if(this.state.errors === "Please select a new theme"){
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
            <select id="themeDropdown" onChange={this.themeSelect}>
                <option id="default" selected value="Classroom" onChange={this.themeSelect}> Select Your Theme </option>
                {Themes.map((n)=>{
                    return <option key={`${n}`} value={n}> {`${n}`} </option>
                })}
            </select>
            <div>
                {this.state.errors}
            </div>
            <div>
                <StartButton onClick={this.gamewordSelect}></StartButton>
                <ResetButton onReset={this.onReset} /> 
            </div>
            
            <GameWord gameword={this.state.gameword} />

            
            {/*<Timer />
            <Rules />*/}
         </Layout>
     )
    }   
};

export default App;

