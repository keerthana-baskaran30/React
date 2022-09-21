import React from "react";

//child 
export default class Render extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            message :"Hello"
        }
    }

    update = () =>{
        this.setState({
            message : this.props.name
        })
    }

    render(){
        return(
            <>
                <i onClick={this.update}>{this.props.render(this.state.message)} {this.state.message} </i>
            </>
        )
    }

}

//parent passing the renderprops
export class RenderProps extends React.Component{
    render(){
        return <Render name ={this.props.name} render={(parameter) =>{
            return <h1>this is parent sending the render prop -{parameter}</h1>
        }}/>
    }
}