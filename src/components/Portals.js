import React from "react"
import ReactDOM from "react-dom"

export default class Portals extends React.Component{
    render(){
        return ReactDOM.createPortal(<h1>this is react portal</h1>,document.getElementById('portal'))
    }
}