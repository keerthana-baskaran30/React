import React from "react"

class MountChild extends React.Component{

    // called when a new component is created , for initializing , for binding event handlers
    constructor(props){
        super(props)
        this.state = {
            message :"hello"
        }
        console.log("child constructor ")
    }
    // used when state depends on the changes on the props , no this keyword,returns a object or null
    static getDerivedStateFromProps(props,state){
        console.log("child getDerivedStateFromProps")
        return null
    }

    // called only once in the component lifecycle , invoked immediaitely when the compnent and its children are added to the DOM
    componentDidMount(){
        console.log("child componentdidmount")
    }

    render(){
        console.log("child rendering")
        return <h1>Mounting child</h1>
    }
}

export default MountChild