import React, { useState, useEffect } from 'react'
import axios from 'axios'

//fetching all
export default function AxiosComponent() {

    const [persons, setPersons] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/')
            .then(res => {
                setPersons(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    },[])

    return (
        <>
            <h4>Lists</h4>
            <ul> {persons.map(person => <li key={person.id}>{person.title}</li>)}</ul>
        </>
    )
}

//fetching by id
export function AxiosComponent2() {
    const [person, setPerson] = useState([]);
    const [id,setId] = useState()
    // const [person] = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

    const handleFetch = event => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                setPerson(res.data)
            })
            .catch(err => {
                console.log("error: failed with 404");
            }) 
    }

    return (
        <div>
            <label>Enter ID:</label>
            <input  onChange = {(event)=>{setId (event.target.value)}}label = "Enter ID:"/>
            <button onClick={handleFetch}>button</button>
            <p>ID :{person.id}</p>
            <p>Title:{person.title}</p>
        </div>
    )
}

// export function useFetch(url){
//     const [data,setData] = useState()
//     useEffect(() => {
//         axios.get(url)
//             .then(res => {
//                 // console.log(res.data)
//                 setData(res.data)
//             })
//             .catch(err => {
//                 console.log(err);
//             })
//     },[url])
//     return [data];
// }