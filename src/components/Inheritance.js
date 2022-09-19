import React from "react";


export default class Inheritance extends React.Component {
    render() {
        return (
            <div>
                <i>Inside parent</i>
            </div>
        );
    }
}
export class ChildOne extends Inheritance {
    render() {
        const parent = super.render();
        console.log(parent)
        return (
            <div>
                {parent}
                <p>inside childone</p>
            </div>
        )
    }
}

export class ChildTwo extends ChildOne {
    render() {
        const parent = super.render();
        return (
            <div>
                {parent}
                <p>inside ChildTwo</p>
            </div>
        )
    }
}
