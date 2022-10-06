import React, { useState, useEffect } from 'react'

export default function useEffectHook() {

    const [error, setError] = useState(null)
    const [data, setData] = useState(null)

    //Dont use async await inside useEffect caouse it will make it to render infinite times
    //use it within a IIF or named function inside useEffect

    // X Dont use
    // useEffect(async () => {
    //     const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=8`)
    //     console.log(response)
    //     const data = await response.json()
    //     setData(data)
    // })

    // using async/await in useEffect
    // useEffect(() => {
    //     console.log("df");
    //     const fetchfunc = async () => {
    //         const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=8`);
    //         console.log(response);
    //         const data = await response.json();
    //         setData(data);
    //     };
    //     fetchfunc();   
    // },[])


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?_limit=8`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error - invalid url")
                }
                console.log(response)
                return response.json()
            })
            .then((response) => {
                console.log(response)
                setData(response)
                setError(null)
            })
            .catch((err) => {
                setError(err.message)
                console.log(err.message);
            })
    }, [])

    return (
        <>
            <p>{error}</p>
            <p>{data && data.map(({ id, title }) => (
                <li key={id}>
                    <i>{title}</i>
                </li>
            ))}
            </p>
        </>
    )
}