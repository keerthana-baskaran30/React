import React from "react";

// export default class ClassRef extends React.Component{
//     constructor(props){
//         super(props)
//         this.cRef = React.createRef()
//     }

//     focusHandler=()=>{
//         this.cRef.current.focus()
//     }

//     render(){
//         return <input ref={this.cRef} />
//     }
// }


// using forwardRefs
const ClassRef = React.forwardRef((props,ref)=>{
    return (
    <>
        <input type="text" ref={ref}/>
       
    </>
    )

})

export default ClassRef