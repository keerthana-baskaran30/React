import React, { useReducer } from 'react'

const reducer = (state,action) => {
    console.log("du")
    return `state ${state}`
}

export default function Reducer(){
    const [state,dispatch] = useReducer(reducer , 0)
    // console.log("state inside reducer function ",state)
    // console.log("dispatch ",dispatch)
    
    return (
        
        <>
            <p onClick = {dispatch(1)} >hehue</p>
        </>
    )
}