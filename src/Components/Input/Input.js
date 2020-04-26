import React from 'react';


class Input extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            value: '',
            list: [],

            errors: {
                name: false, //false means there are no errors


            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.validateLength = this.validateLength.bind(this);
    }

    validateLength(value, gameword){
        //we are going to store errors for all parts
        //in a single array
        const lettersArray = value.toLowerCase().split("");
        const gamewordArray = gameword.toLowerCase().split("");

        const errors = [];

        if (lettersArray.length > gamewordArray.length){
            errors.push("Word has too many letters");
        }
     
        console.log(errors);
    };

    handleChange(event){
        this.setState({value: event.target.value});
    }
    onSubmit = (event) => {
        if(event.key === 'Enter'){
            this.validateLength(this.state.value, this.props.word);

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
        let AnswerList = this.state.list;
        return(
            <div>
                <div>
                    <label> Enter words <input 
                    value={this.state.value}
                    onChange={this.handleChange}
                    onKeyPress={this.onSubmit}
                    type="text" 
                    name="answer" 
                    /> </label>
                </div>
                <div>
                    {this.reset(this.props.word)}
                    {AnswerList.map(answer => <div> {answer} </div>)}
                </div>
            </div>
        )
    }
}
export default Input;