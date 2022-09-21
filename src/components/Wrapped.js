import React from "react";
import higherOrderComponent from "./Hoc";

class Clicker extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <h1>{this.props.count}</h1>
                <i>{this.props.render()}</i>
                <button onClick={this.props.onClick}>Clicked {this.props.count}  times {this.props.name} {this.props.id} {this.props.parameter}</button>
            </>

        )
    }
}

export default higherOrderComponent(Clicker,"parameter")

//props are passed to the hoc not the clicker