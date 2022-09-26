import React, { useState, useEffect } from 'react'


export default function useCustomHook(props,stateVariable,setStateVariable){

    const [name,setName] = useState()

   //setStateVariable("edef") //error
    
    useEffect(() => {
        console.log(`updating name :${name} - ${props}`,stateVariable)
    })

    // console.log(`updating name :${name} - ${props}`,stateVariable)
    return (
        <>
            input <input type = "text" onChange = {(e)=> {setName(e.target.value)}}/>
        </>
    )
}
