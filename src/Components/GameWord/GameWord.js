import React from "react";
import './GameWord.scss';
import Input from '../Input/Input';


class Gameword extends React.Component{
    render(){
        return(
           <div>
               <p className="word">{this.props.gameword}</p>
                <Input word={this.props.gameword} />
            </div> 
        )
    }
}

export default Gameword;