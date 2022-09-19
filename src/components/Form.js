import React from 'react';


export default class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {name: '',description: 'Please enter the description',flavor: 'coconut'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
    this.setState({[event.target.name] : event.target.value})
    //   if (value === "name"){
    //     this.setState({name: event.target.value});
        
    //   }
    //   else if (value==="description"){
    //     this.setState({description: event.target.value});
    //   }      
    //   else{
    //     this.setState({flavor: event.target.value})
    //   }
     }
  
    handleSubmit(event) {
      alert("Name:"+this.state.name+"\nDescription:"+this.state.description+"\nFlavour:"+this.state.flavor);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <h2>{this.props.formname}</h2>
          <div>
            <label>
              Name:
              <input type="text" placeholder='your message' name='name' value={this.state.name} onChange={(event)=>{this.handleChange(event)}} />
            </label>
          </div>
          
          <div>
            <label>
              Description:
              <input type="textarea"  name= 'description'value = {this.state.description} onChange={(event)=>{this.handleChange(event)}}/>
            </label>
          </div>
          
          <div>
              <label>
                Pick your favorite flavor:
                <select name= 'flavor' value = {this.state.flavor} onChange={(event)=>{this.handleChange(event)}}>
                  <option value="grapefruit">Grapefruit</option>
                  <option value="lime">Lime</option>
                  <option value="coconut">Coconut</option>
                  <option value="mango">Mango</option>
                </select>
              </label>
            
          </div>
          
          <input type="submit" value="Submit" />

        </form>
      );
    }
  }
  