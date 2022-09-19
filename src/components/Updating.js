import React from 'react'
import UpdateChild from './UpdateChild'


class Updating extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            message:"hi"
        }
        console.log("constructor")
        this.onclickHandler = this.onclickHandler.bind(this)
    }

    static getDerivedStateFromProps(){
        console.log("getDrerivedStateProps")
        return null
    }

    //will always return true in regular component whereas in pure component it will compare the prev and current state
    // if changes it will return true else false 
    shouldComponentUpdate(Props,state){
        console.log("shouldcomponent update")
        return true
    }

    getSnapshotBeforeUpdate(prevProps , prevState){
        console.log("getsnapshot")
        return null
    }

    componentDidUpdate(){
        console.log("componentdidupdate")
    }

    onclickHandler(){
        this.setState({message:"hello"})
    }

    render(){
        console.log("rendering")
        return (
            <div>
                <h1>updating</h1>
                <UpdateChild/>
                <button onClick={this.onclickHandler}>Button {this.state.message}</button>
            </div>
        
        )
    }
}

export default Updating