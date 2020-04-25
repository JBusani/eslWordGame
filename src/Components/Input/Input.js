import React from 'react';


class Input extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            value: '',
            list: [],
        };
        this.handleChange = this.handleChange.bind(this);
        this.onAddItem = this.onAddItem.bind(this);

    }

    handleChange(event){
        this.setState({value: event.target.value});
    }
    onAddItem = (event) => {
        
        if(event.key === 'Enter'){
            let value = this.state.value.split("");
            let gameword = this.props.word.split("");
            console.log(value);
            console.log(gameword);

            if(value.length > gameword.length){
                console.log("The input has too many letters");
              }
            this.setState(state => {
            const list = state.list.concat(state.value + " ");

            return {
                list,
                value: '',
            };
        });}
    };
    
    reset(w){
      let list = this.state.list;
      let word = w;

      while(list.length && word === ""){
          list.pop();

        }
        
      };
    
    
    /* 

    PROBLEM: THis still doesn't account for if a letter is duplicated too many times. 
    For exmaple, the "o" is considered true each time.

var gamewords =  "school";
var input = "coool";

function validate(gamewords, input){
  
  var gameword = gamewords.split("");
  var inputletters = input.split("");
  var booleanValidator = null;
 
 if(inputletters.length > gameword.length){
   console.log("The input has too many letters");
 }else{   
   for(var x=0; x<inputletters.length; x++){
  var answer = gameword.includes(inputletters[x]);
  console.log(answer)
  if(answer === false){
    var l = inputletters[x]
    console.log(l + " is not a letter in the gameword");
    return booleanValidator = false;
   
  }else{
    console.log(inputletters[x] + " is in the gameword");
  }
   
  }
 }
}

*/
    
    render(){
        let AnswerList = this.state.list;
        return(
            <div>
                <div>
                    <label> Enter words <input 
                    value={this.state.value}
                    onChange={this.handleChange}
                    onKeyPress={this.onAddItem}
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