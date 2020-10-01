import React from 'react';
import './Input.css';
import Score from '../Scoreboard/score';
import validate from '../../methods/validate';

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
    }

    handleChange(event){
        this.setState({value: event.target.value.toLowerCase(), errors: []});
    }
    onSubmit = (event) => {
        if(event.key === 'Enter' || event.target.value === "Submit"){
            const errors = validate(this.state.value, this.props.word);
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