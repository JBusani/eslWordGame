import React from "react";
import './GameWords.sass';
import StartButton from '../Buttons/Start';
import ResetButton from '../Buttons/Reset';
import Input from '../Input/Input';
import Data from '../data/data';


class Gamewords extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            array: [],
            word: '',
        };
        this.handleClick = this.handleClick.bind(this);
        this.onReset = this.onReset.bind(this);
    }
    
    handleClick(){
        const t = this.props.theme;
        const lvls = this.props.levelNumber;
        const array = Data.level[lvls][t].words;
        const number = Math.floor(Math.random() * array.length);
        
        this.setState(state => ({
            word: array[number]
        }));
    
    }

    onReset(){
        this.setState(state => ({
            word: '',
        }));
    };

    render(){
      

        return(
            <div>
                <div className="buttons">
                    <StartButton className="buttons" onClick={this.handleClick} />
                    <ResetButton  onReset={this.onReset} />  
                </div>
                
                <p className="word">{this.state.word}</p> 
                <Input word={this.state.word} />
            </div> 
        )
    }
}

export default Gamewords;