import React from 'react';

class Level extends React.Component{

    render(){

        return(
            <div>
            <select id="levels">
                <option value="1"> Level 1</option>
                <option value="2"> Level 2</option>
                <option value="3"> Level 3</option>
                <option value="4"> Level 4</option>
                <option value="5"> Level 5</option>
            </select>
            <select>
                <option value="1"> Chapter 1</option>
                <option value="2"> Chapter 2</option>
                <option value="3"> Chapter 3</option>
                <option value="4"> Chapter 4</option>
            </select>
            </div>
        )
    }
};

export default Level;