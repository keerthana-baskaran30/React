import React from 'react';

// A simple functional component
function Function1(props){
    return <h1>Hello {props.name}</h1>
}

Function1.defaultProps = {
    name:"default"
}

// A functional component using createElement method instead of using JSX
export const Function2 = ()=>{
    return React.createElement('i',{id:"function2", className:"function2", htmlFor:"forcreate"},"this is created using createElement")
}

export default Function1