import React from 'react';
import './Input.css';
import Score from '../Scoreboard/score';
import validate from '../../methods/validate';

class Input extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            value: '',
            answers: [],
            errors: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    handleChange(event){
        this.setState({value: event.target.value.toLowerCase(), errors: []});
    }
    onSubmit = (event) => {
        if(this.props.word === ""){
            this.setState(state => ({
                errors: []
            }))
            return;
        }
        if(event.key === 'Enter' || event.target.value === "Submit"){
            const errors = validate(this.state.value, this.props.word);
            if (errors.length > 0){
                this.setState({errors});
                return;
            }
            this.setState(state => {
                const answers = state.answers.concat(state.value);
                return{
                    answers,
                    value: '',
                };
            });}   
}
    
    clearAnswers(w){
      let answers = this.state.answers;
      let word = w;
      while(answers.length && word === ""){
          answers.pop();
        }
      };
    
    render(){
        const {errors} = this.state;
        let AnswerList = this.state.answers;
        let Gameword = document.getElementById("gameword");
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
                    {this.clearAnswers(this.props.word)}
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