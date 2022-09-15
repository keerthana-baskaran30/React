import React from 'react'

class UpdateChild extends React.Component{
    constructor(){
        super()
        this.state = {
            message :"hello ji"
        }
        console.log("child constructor")
    }

    static getDerivedStateFromProps(){
        console.log("child derived state")
        return null
    }

    shouldComponentUpdate(){
        console.log("child component update")
        return true
    }

    getSnapshotBeforeUpdate(){
        console.log("child getsnapshot")
        return null
    }

    componentDidUpdate(){
        console.log("child component did update?")
    }

    render(){
        console.log("child rendering")
        return(
            <div>
                child update
            </div>
        )
    }
}

export default UpdateChild