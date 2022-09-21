import React from "react";

class Refs extends React.Component {
  constructor(props) {
    super(props);
    this.callRef = React.createRef();
    this.cbRef = null
    this.setRef = (element)=>{
      this.cbRef=element
    }

  }

  componentDidMount() {
    console.log(this.callRef) // current object
    if (this.cbRef){
      this.refFunc()
    }

  }

  refFunc = () => {
    // console.log(this.callRef.current.type)
    // console.log(this.callRef.current.value)
    console.log(this.cbRef.value) //call back approach
  }

  render() {

    return (
      <>
        {/* <input type="text" ref={this.callRef} onChange={this.refFunc} /> */}
        <input type="text" ref={this.setRef} onChange={this.refFunc} />
      </>
    )
  }
}

export default Refs