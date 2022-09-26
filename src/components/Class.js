import React from 'react';

class Class extends React.Component {
    constructor(){
        super()
        this.state = {
            statevariable :"statevariable"
        }
    }
    
    render() {
        const {statevariable : value} = this.state;
        return (
            <>
                <h1>this is class component</h1>
                <h1>this is another tag in class component</h1>
                <b>{this.props.name} - {this.state.statevariable}</b>
                <b>Destructuring {value} </b>
                <ClassProps/>
            </>

        )
    }
}

export class ClassProps extends React.Component {

    //another way of declaring defaultprops
    // static defaultProps = {
    //     name: 'stranger'
    // }

    constructor(props){
        super(props)
        console.log(props) // Returns an empty object if props are not passed
        // props.name = "imutable" cannot change they are immutable
        this.state = {
            statevar: "this is state var"
        }
    }
    render(){
        return (
            <>
                <p>this is classProps component</p>
                <p>{this.props.name} - {this.props.children} - {this.state.statevar}</p>
            </>
        )
    }
}

ClassProps.defaultProps = {
    name : "default class",
}

export default Class