import React from 'react'
import MountChild from './MountChild'

class Mount extends React.Component {

    // called when a new component is created , for initializing , for binding event handlers
    constructor(props) {
        super(props)
        this.state = {
            message: "hello"
        }
        console.log("constructor")
    }
    // used when state depends on the changes on the props , no this keyword,returns a object or null
    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps")
        console.log(props,state)
        
        return ({message : "getDerived state"})
    }

    // called only once in the component lifecycle , invoked immediaitely when the compnent and its children are added to the DOM
    componentDidMount() {
        console.log("componentdidmount")
    }

    render() {
        console.log("rendering")
        return (
            <div>
                <h1>Mounting {this.state.message}</h1>
                <MountChild />
            </div>

        )
    }
}



export default Mount