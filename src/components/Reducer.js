import React, { useReducer } from 'react'

export default function Reducer() {
    const [state, dispatch] = useReducer(reducer, 0)

    function reducer (state, action) {
        // return state+action

        if (action===1) {
            return state+action
        }
        else{
            return state-action
        }

    }

    return (
        <>
            <p>{state}</p>
            <button onClick={() => dispatch(1)}> Add 1 </button>
            <button onClick = {() => dispatch(2)}>Sub 2</button>
        </>
    )
}