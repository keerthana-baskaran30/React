import React from "react";

// export default class Ancestor extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             id: "",
//             name: ""
//         }
//         this.change = this.change.bind(this)
//     }
//     change(name,id){
//         this.setState={
//             name:name,
//             id:id
//         }
//     }
//     render() {
//         return (
//             <>
//                 <Uplift id={this.state.id} name={this.state.name} change={this.change}></Uplift>
//                 <Display name={this.state.name} id={this.state.id}/>
//             </>
//         )
//     }
// }


// export class Uplift extends React.Component {
//     constructor(props) {
//         super(props)
//     }

//     UpliftFunction = (event) => {
//         console.log(event.target.value)
//         this.props.change(event.target.value)

//     }
//     render() {
//         return (
//             <>
//                 <label>
//                     Name:
//                     <input type="text" name='name' value={this.props.name} onChange={this.UpliftFunction} />
//                 </label>
                
//                 <label>
//                     ID:
//                     <input type='text' name="id" value={this.props.id} onChange={this.UpliftFunction} />
//                 </label>
                
//             </>

//         )
//     }
// }

// export class Display extends React.Component{
//     render(){
//         return(
//             <>
//                 <h1>name entered is:{this.props.name}</h1>
//                 <h1>id entered is:{this.props.id}</h1>
//             </>
//         )
//     }
// }



export default class Ancestor extends React.Component {
    constructor(props) {
       super(props);
       this.state = {playerName: ''};
    }
    updateSelectedPlayer = (name)=> {
       this.setState({
          playerName: name,
       });
    }
    render () {
       return (
          <div>
             <PlayerContent  clickHandler={this.updateSelectedPlayer}  name="David"/>
             <PlayerContent  clickHandler={this.updateSelectedPlayer}  name="Steve"/>
             <PlayerDetails name={this.state.playerName}/>
          </div>
       );
    }
 }
export class PlayerContent extends React.Component {
   render () {
      return (
         <button onClick={() => {this.props.clickHandler(this.props.name)}}>{this.props.name}</button>
      );
   }
}
export class PlayerDetails extends React.Component {
   render () {
      return (
         <div>{this.props.name}
         </div>
      );
   }
}
