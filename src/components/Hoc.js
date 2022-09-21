import React from "react";

//function takes an component and returns a component - HOC
// const EnhancedComponent = hoc(original component)


const higherOrderComponent = (WrappedComponent,parameter) => {
    class HigherOrderComponent extends React.Component {
        constructor(props) {
            super(props)
            // console.log(props.name)//kelly
            this.state = {
                counter: 0
            }
        }
        onClick = () => {
            this.setState({ counter: this.state.counter + 1 })
            console.log("counter increased")
        }
        render() {
            return (
                <>
                    <i>{parameter}</i>
                    <WrappedComponent onClick={this.onClick} count={this.state.counter} {...this.props} parameter={parameter} render={()=>{ console.log("dcd");}}/>
                </>

            )

        }
    }
    return HigherOrderComponent
}

export default higherOrderComponent

