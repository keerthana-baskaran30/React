import React, { useState } from 'react'
import useCustomHook from './useCustomHook'

export default function CustomHook(props){

   const [stateVariable , setStateVariable] = useState("default") 
   const custom = useCustomHook(props.hook,stateVariable,setStateVariable)

    return (
        <>
            <p>{custom} {stateVariable}</p>
        </>
    )
}

export function CustomHook2(){
    const custom2 = useCustomHook()

    return (
        <i>{custom2}</i>
    )
}