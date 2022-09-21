import React from "react";
import higherOrderComponent from "./Hoc";

class Clicker2 extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <h1 onClick={this.props.onClick} >{this.props.count}</h1>
            </>

        )
    }
}

export default higherOrderComponent(Clicker2)