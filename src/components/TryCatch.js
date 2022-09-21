import React from "react";
import Error from "./Error";

export default class TryCatch extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            counter:0, error:null
        }
    }

    handleClick = () =>{
        try{
          if(this.state.counter===5){
            throw Error
          }
          else{
            this.setState({counter:this.state.counter+1})
          }
        }
        catch(error){
            this.setState({error:error})
        }
        
    }

    render(){
        // console.log(this.state.error)
        if (this.state.error){
            return <h1>Error in handleevent</h1>
        }
        return <h1 onClick={this.handleClick}>{this.state.counter}</h1>
    }
}