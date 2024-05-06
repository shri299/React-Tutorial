import React from "react";

function Name(props){
    return (
        <div>
            <h1>{props.name} is {props.category}</h1>
            {props.children}
        </div>
    );
}

export default Name;