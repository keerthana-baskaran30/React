import React, { useEffect, useState } from "react";

function Hook2() {
    const [count, setCount] = useState(0)

    const incremement = () => {
        setCount(prev => prev+2) // a callback function that accepts the previous state value
    }

    const decrement =() => {
        setCount(count-1)//initial state
    }

    //when a empty array is passed useEffect will happen only once that is only on the inital render
    //runs only once
    useEffect(() => {
       console.log("useEffect called on inital render")
    },[])

    return (
        <>
            <h1>{count}</h1>
            <button onClick={incremement}> Increment </button>
            <button onClick={decrement}>decrement</button>
        </>

    )

}

export default Hook2