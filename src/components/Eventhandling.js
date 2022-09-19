import React from "react";

function clickevent(){
    console.log("clicked")
}

function Event(){
    
    return (
        <button onClick={clickevent}> Press </button>
    )
}

export class EventClass extends React.Component{
    tap = ()=>{
        console.log(this)
    }
    render(){
        return(
            // <button onClick = {()=>this.tap()}> tap </button>
            <button onClick = {this.tap}> tap </button>
        )
    }
}

export default Event;


