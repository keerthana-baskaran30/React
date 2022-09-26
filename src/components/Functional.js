import React from 'react';


// A simple functional component
// props.children gives the value between the tags ie, the content
function Function1(props) {    
    console.log(props)
    const {name:name1} = props //Destructuring
    console.log(name1)
    return (
        <>
            <h1>Hello {props.name}</h1>
            {props.children} 
            <Function2/>
        </>

    )
}

// Used to set default value to the props
Function1.defaultProps = {
    name: "default"
}

//should install proptypes using npm 
// Function1.propTypes = {
//     name: PropTypes.string
//   };

// A functional component using createElement method instead of using JSX
export const Function2 = () => {
    return React.createElement('i', { id: "function2", className: "function2", htmlFor: "forcreate" }, "this is created using createElement")
}

export default Function1