import React from "react";

// export default class Error extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { hasError: true };
//     }
  
//     static getDerivedStateFromError(error) {
//       // Update state so the next render will show the fallback UI.
//       return { hasError: true };
//     }
  
//     componentDidCatch(error, errorInfo) {
//       // You can also log the error to an error reporting service
//       logErrorToMyService(error, errorInfo);
//     }
  
//     render() {
//       if (this.state.hasError) {
//         // You can render any custom fallback UI
//         return <h1>Something went wrong.</h1>;
//       }
  
//       return this.props.children; 
//     }
// }



export default class Error extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      error:false,
      errorInfo: null 
    }
  }

  componentDidCatch(error,errorInfo){
    this.setState({  
      error: error,  
      errorInfo: errorInfo  
    })  
  }

  render(){
    if (this.state.errorInfo) {  
      return (  
        <div>  
          <h2>Something went wrong.</h2>  
          <details style={{ whiteSpace: 'pre-wrap' }}>  
            {this.state.error && this.state.error.toString()}  
            <br />  
            {this.state.errorInfo.componentStack}  
          </details>  
        </div>  
      );  
    }  
    return this.props.children;  
  }    
}

export class CounterError extends React.Component {  
  constructor(props) {  
    super(props);  
    this.state = { counter: 0 };  
    this.handleClick = this.handleClick.bind(this);  
  }  
    
  handleClick() {  
    this.setState(({counter}) => ({  
      counter: counter + 1  
    }));  
  }  
    
  render() {  
    if (this.state.counter === 3) {  
      throw new Error('crashed!');  
    }  
    return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;  
  }  
}  

