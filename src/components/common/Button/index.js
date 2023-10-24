import React from "react";

export default function Button(props){
    return (
        <button className="bg-green-200 w-24 rounded-sm" > {props.buttonText} </button>
    )
}