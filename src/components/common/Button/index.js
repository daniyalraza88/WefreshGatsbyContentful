import React from "react";

export default function Button(props){
    return (
        <button className= {`bg-[#FFD476] rounded-sm ${props.width}`} > {props.buttonText} </button>
    )
}