import React from 'react';
import './Input.css';
import Score from '../Scoreboard/score';

class Input extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            value: '',
            list: [],

            errors: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }

    validate(value, gameword){
        //we are going to store errors for all parts
        //in a single array
        const lettersArray = value.toLowerCase().split("");
        const gamewordArray = gameword.toLowerCase().split("");

        const errors = [];

        //check length of input is less than or equal to the gameword
        if (lettersArray.length > gamewordArray.length){
            errors.push("Word has too many letters");
        }
        //check there is an input
        if (lettersArray.length === 0){
            errors.push("You need to enter a word");
        }        
        //check that input letters are in the gameword
        for (let x = 0; x < lettersArray.length; x++){
            const letterValue = lettersArray[x];
            if(!gamewordArray.includes(letterValue)){
                errors.push(`${letterValue} is not acceptable`);
            } else{

                  //check for multiple letter uses
                let patt = new RegExp(`${lettersArray[x]}`, "g");
                let gamewordLetterCount = gameword.toLowerCase().match(patt).length;
                let valueLetterCount = value.toLowerCase().match(patt).length;

                if (valueLetterCount > gamewordLetterCount){
                    errors.push(`You have too many ${lettersArray[x]}`);
                    break;
                }

            }
        }

        console.log(errors);
        return errors;
    };

    handleChange(event){
        this.setState({value: event.target.value.toLowerCase(), errors: []});
    }
    onSubmit = (event) => {
        if(event.key === 'Enter' || event.target.value === "Submit"){
            const errors = this.validate(this.state.value, this.props.word);
            if (errors.length > 0){
                this.setState({errors});
                return;
            }
            this.setState(state => {
                const list = state.list.concat(state.value);
                return{
                    list,
                    value: '',
                };
            });}   
}
    
    reset(w){
      let list = this.state.list;
      let word = w;

      while(list.length && word === ""){
          list.pop();
        } 
      };
    
    render(){
        const {errors} = this.state;
        let AnswerList = this.state.list;
        return(
            <div>
                <div>
                    <label> Enter words <input 
                    autoComplete="off"
                    value={this.state.value}
                    onChange={this.handleChange}
                    onKeyPress={this.onSubmit}
                    type="text" 
                    name="answer" /> </label>
                    <button id="myBtn" value="Submit" type="submit" onClick={this.onSubmit}> Enter </button>
                </div>
                <div>
                    {errors.map(error => (
                        <p key={error}> Error: {error} </p>
                    ))}
                </div>
                <div className="Answers">
                    {this.reset(this.props.word)}
                    {AnswerList.map(answer => <div className="answer" key={answer} >  {answer} </div>)}
                </div>
                <div>
                <Score elements={AnswerList.length}/>
                </div>
            </div>
        )
    }
}
export default Input;