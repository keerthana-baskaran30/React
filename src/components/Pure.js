import React from "react";


// it checks whther the prevstate and current state are same or not in the shouldcomponentupdate
// if same wont re render else will re-render

class Pure extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      name: "React JS"
    };
  }

  changeName = () => {
    this.setState({ name: "React JS" });
  };

  render() {
    console.log("FirstComponent -- Render method called");
    return (
      <div>
        <p> Name is : {this.state.name} </p>
        <button onClick={this.changeName}>Change Name</button>
      </div>
    );
  }
}

export default Pure;