import React from 'react'
// import Child, { ChildClass } from './Child'
import Child from './Child'

// export default function Parent(props){
//     const parentobj = {
//         animal :"cat",
//         pet: "yes"
//     }
//     const parentfunction = (parameter) =>{
//         return <i>{parentobj.animal},{parameter}</i>
//     }

//     return(
//         <div>
//             {/* <p>{props.prop.id}-{props.prop.name}-{props.subfunction()}</p> */}
//             <Child  parentfunction={parentfunction} />
            
//         </div>
//     )
// }


export class ParentClass extends React.Component{
    constructor(){
        super()
        this.state = {
            message : "Hello world"
        }
    }

    parentMethod = () =>{
        this.setState({message : "hi"})
        console.log("changed")

    }
    render(){
        return(
            <div>
                <ChildClass message= {this.state.message} parentMethod={this.parentMethod}/>
            </div>
        )
    }
}
