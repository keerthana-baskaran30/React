import React from 'react'
import Parent from './Parent'

// export default function Child(props) {
//     const obj = {
//         id: 1,
//         name: "keerthana"
//     }

//     function subchild() {
//         return <p>"inside subchild"</p>
//     }

//     return (
//         <React.Fragment>
//             {/* <Parent prop={obj} subfunction={subchild} /> */}
//             <p>{props.parentfunction("parameter")}</p>
//             <p>"react fragment"</p>

//         </React.Fragment>
//     )
// }

// export class ChildClass extends React.Component{
//     render(){
//         return (
//             <button onClick ={this.props.parentMethod}>child button </button> //accessing the parentmethod from child
//         )
//     }
// }

// accessing the parent method from childmethod
export class ChildClass extends React.Component {
    childMethod = ()=>{
        this.props.parentMethod()
    }

    render() {
        return (
            <button onClick={this.childMethod}>child button {this.props.message} </button> 
        )
    }
}