import React from "react";

export default function InputField(props){
    return (
        <input className={`rounded-sm ${props.width}`} placeholder={props.placeholderText}/> 
    )
}