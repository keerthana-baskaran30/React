import React, { useState, useEffect } from 'react'

// export default function HooksBasic(props){
//     //name - state variable
//     // setName -State Setter function can be named anything
//     // "default" - setting the default value to the state variable
//     //every time we want to update our state, we call the state setter function 
//     //and this signals to React that we would like to re-render our component with its updated state.
//     const [name,setName] = useState("default"); //if called without a default value for initial render it will return undefined 
//     const [value,setValue] = useState(props.value)

//     const changeName = () => {
//         setName("keerthana");
//     }

//     useEffect(() => {
//         console.log("runs after the render and update")     
//     });
//     return (
//         <>
//             {/* to access the value directly use {name} */}
//             <h1> {name} {value}</h1> 
//             < button onClick={changeName}>button</button>
//         </>
//     )
// }


// //Counter Example using useState
// export default function HooksBasic(){

//     const [counter,setCounter] = useState(0) ;
//     const [counterArray, setCounterArray] = useState([])

//     // console.log(setCounter) //a function
//     // console.log(counter) //0
//     const changeCounter = () => {
//         setCounter(counter+1)      
//         setCounterArray([...counterArray,counter])  
//     }

//     return (
//         <>
//             {/* to access the value directly use {name} */}
//             <h1> {counter}</h1> 
//             <h2>Array -{counterArray} </h2>
//             < button onClick={changeCounter}>Counter button</button>
//         </>
//     )
// }



export default function HooksBasic() {
    const [object, setObject] = useState({ name: "", id: "" })
    const [list, setList] = useState({})
    const [isvalid , setIsvalid] = useState(false)

    const changeObject = (event) => {
        setObject({ ...object, [event.target.name]: event.target.value })
        console.log(object);        
    }

    const submitFun = () => {
        setList(() => { return { ...list, [object.id]: object } })
        console.log("ijoio", list)

    }

    //passing the dependency array  - [list]
    //based the value in the array useE ffect will take effect
    // executes the useEffect if at least one of the provided dependencies has changed since the previous run
    //runs only when the dependency array changes
    useEffect (() => {
        console.log("updating the list");
        (object.name.length <10 && object.name !="") ? setIsvalid(true) :setIsvalid(false)    
    },[object.name])


    return (
        // console.log(list)
        <>
            <label>Name:</label>
            <input type="text" name="name" defaultValue={""} onChange={changeObject} />
            <label>Id:</label>
            <input type="text" name="id" defaultValue={""} onChange={changeObject} />
            <button onClick={submitFun}>submit</button>
            <br></br>
            <p>{JSON.stringify(object)}</p>
            <p>{JSON.stringify(list)}</p>
            <p>{isvalid ? "Valid" :"not valid"}</p>
            {/* {Object.keys(list).map((item) => {
            console.log(list[item].name)
            // <p> {list[item].name} - {list.item.id} </p>
            })} */}

        </>
    )
}

// {"1":{"name":"Keerthana","id":"1"},"2":{"name":"joe","id":"2"}}



