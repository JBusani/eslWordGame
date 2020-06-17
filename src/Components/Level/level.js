import React from 'react';

class Level extends React.Component{

    render(){

        return(
            <select id="levels">
                <option value="1"> Level 1</option>
                <option value="2"> Level 2</option>
                <option value="3"> Level 3</option>
                <option value="4"> Level 4</option>
                <option value="5"> Level 5</option>
            </select>
        )
    }
};

export default Level;