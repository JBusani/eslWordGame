import React from 'react';


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

        //check length
        if (lettersArray.length > gamewordArray.length){
            errors.push("Word has too many letters");
        }

        //letters are in the gameword
        for (let x = 0; x < lettersArray.length; x++){
            const letterValue = lettersArray[x];
            if(!gamewordArray.includes(letterValue)){
                errors.push(`${letterValue} is not acceptable`);
            }
        }
        
        //check for multiple letter uses

        for(let x = 0; x < lettersArray.length; x++){
            let patt = new RegExp(`${lettersArray[x]}`, "g");
            let gamewordLetterCount = gameword.match(patt).length;
            let valueLetterCount = value.match(patt).length;

            if (valueLetterCount <= gamewordLetterCount){
                continue;
            } else {
                console.log(`You have too many ${lettersArray[x]}`);
                break;
            }
        }
        



        console.log(errors);
        return errors;
    };

    handleChange(event){
        this.setState({value: event.target.value, errors: []});
    }
    onSubmit = (event) => {
        if(event.key === 'Enter'){
            const errors = this.validate(this.state.value, this.props.word);
            if (errors.length > 0){
                this.setState({errors});
                return;
            }
            
            this.setState(state => {
                const list = state.list.concat(state.value + " ");
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
                    name="answer" 
                    /> </label>
                </div>
                <div>
                    {errors.map(error => (
                        <p key={error}> Error: {error} </p>
                    ))}
                </div>
                <div>
                    {this.reset(this.props.word)}
                    {AnswerList.map(answer => <div key={answer}> {answer} </div>)}
                </div>
            </div>
        )
    }
}
export default Input;