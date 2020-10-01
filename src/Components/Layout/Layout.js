import React from 'react';
import "./Layout.css"

function Layout(props){
    return (
        <div className="home" >
            <div>
                <h1>Word Game</h1>
            </div>
            {props.children}
        </div>
    )
};

export default Layout;