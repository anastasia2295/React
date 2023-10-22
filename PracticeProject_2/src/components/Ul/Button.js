import React from "react"
const Button = (props) =>{
    return (
        <button 
        className={classes.button} 
        type={props.type || type="button"
        onClick={props.onClick}}>
        {props.children}
        </button>
    )
}
export default Button