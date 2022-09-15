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
    tap(){
        console.log("inside tap")
    }
    render(){
        return(
            <button onClick = {()=>this.tap()}> tap </button>
            // <button onClick = {this.tap()}> tap </button>
        )
    }
}

// export class ClassEvent extends React.Component{
//     constructor(){
//         super()
//         this.state = {
//             message : "Hie"
//         }
//         this.buttonHandler = this.buttonHandler.bind(this);
//     }

//     buttonHandler(){
//         this.setState = (
//             () => { message = "button handler"}
//         )
//         console.log(this.state.message)
//     }

//     render(){
//         return(
//             <div>
//                 {this.state.message}
//                 <button onClick={this.buttonHandler}>Button</button>
//             </div>
//         )
//     }
// }
export default Event;