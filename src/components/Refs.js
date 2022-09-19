import React from "react";

class Refs extends React.Component {  
    constructor(props) {  
      super(props);  
      this.callRef = React.createRef();  
      
    }  

    componentDidMount(){
      if(this.cbRef){
        console.log(this.cbRef.value)
      }
    }
    
    refFunc = ()=>{
        console.log(this.callRef.current.type)
        console.log(this.callRef.current.value)
    }

    render() {  
     
      return <input  type="text" ref={this.callRef} onChange={this.refFunc} />  ;  
    }  
  }  
  
export default Refs