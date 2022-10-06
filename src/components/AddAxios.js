import React, { useState } from 'react'
import Form from './Form'
import axios from 'axios'

//creating a instance of axios and using it in the request call
const axiosInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
});

export default function AddAxios(){

    const handleSubmit = (formObject) => {
        console.log("inside axios handle submit")
        const data = {
            userId:formObject.userId,
            id:formObject.id,
            title:formObject.title,
            body :formObject.body
        }
        console.log(formObject.title)

        axios.post(`https://jsonplaceholder.typicode.com/posts/`,{data})
        .then(res =>{
            console.log(res)
            console.log(res.data);           
        })

        //creating a instance of axios
        // axiosInstance.post('/posts',{data})
        // .then(res => {
        //     console.log(res.data);
        // })
        
    }

    return(
        <>
            <Form axiosHandleSubmit = {handleSubmit}/>
        </>
    )

}