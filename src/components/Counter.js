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
        console.log("func")
        this.state.count =="" ? this.setState({count:"clicked"}): this.setState({count:""})
        
    }

    render() {
        return (
            <>
                <p>{this.state.count}</p>
                {/* no need to bind in constructor*/}
                {/* <button onClick = {(event)=>this.counter(event)}>Counter {this.state.count}</button> */}

                {/* no need of this.counter = this.counter.bind(this) in constructor  */}
                {/* <button onClick={this.counter.bind(this)}>click me</button>  */}

                {/* need to bind in the constructor */}
                <button onClick = {this.counter}>Counter {this.state.count}</button>


            </>

        )

    }
}

export default Counter