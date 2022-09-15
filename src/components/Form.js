import React from 'react'

class Form extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <form>
                <div>
                    <label>Name:</label>
                    <input type = "text"/>
                </div>
            </form>
           
        )
    }
}

export default Form