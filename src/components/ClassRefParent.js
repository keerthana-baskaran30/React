import React from "react";
import ClassRef from "./ClassRef";

export default class ClassRefParent extends React.Component{
    constructor(props){
       super(props)
        this.pRef = React.createRef()
    }

    f =() =>{
        // console.log(this.pRef.current)
        // this.pRef.current.focusHandler()
        this.pRef.current.focus()
    }
    render(){
        return(
            <>
                <ClassRef ref = {this.pRef}/>
                <button onClick={this.f}>Button</button>
            </>
        )
    }
}