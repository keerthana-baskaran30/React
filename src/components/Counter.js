import React from 'react';


class Counter extends React.Component {
    constructor() {
        super()
        this.state = {
            count: ""
        }
        this.counter = this.counter.bind(this)
    }

    counter(event){
        // conditional if
        // if (this.state.count == ""){
        //     this.setState({count:"clicked"})
        // }
        // else{
        //     this.setState({count:""})
        // }

        // ternary 
        this.state.count =="" ? this.setState({count:"clicked"}): this.setState({count:""})
        
    }

    render() {
        return (
            <>
                <p>{this.state.count}</p>
                <button onClick = {(event)=>this.counter(event)}>Counter {this.state.count}</button>
                {/* <button onClick={this.counter}>click me</button> */}
            </>

        )

    }
}

export default Counter