import React from 'react';


export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {userId:"", id: '',title: '', body: 'Please enter the description', flavor: 'coconut' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit(event) {
    alert(`userId : ${this.state.userId}\n id: ${this.state.id}\n title: ${this.state.title} \n body:${this.state.body}`)
    event.preventDefault();
    this.props.axiosHandleSubmit({ "userId":this.state.userId,"id":this.state.id,"title": this.state.title, "body": this.state.body })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>{this.props.formname}</h2>
        <div>
          <label>
            userId:
            <input type="textarea" name='userId' value={this.state.userId} onChange={(event) => { this.handleChange(event) }} />
          </label>
        </div>

        <div>
          <label>
           id:
            <input type="textarea" name='id' value={this.state.id} onChange={(event) => { this.handleChange(event) }} />
          </label>
        </div>

        <div>
          <label>
            Title:
            <input type="text" placeholder='your message' name='title' value={this.state.title} onChange={(event) => { this.handleChange(event) }} />
          </label>
        </div>

        <div>
          <label>
            Body:
            <input type="textarea" name='body' value={this.state.body} onChange={(event) => { this.handleChange(event) }} />
          </label>
        </div>

        <div>
          <label>
            Pick your favorite flavor:
            <select name='flavor' value={this.state.flavor} onChange={(event) => { this.handleChange(event) }}>
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
