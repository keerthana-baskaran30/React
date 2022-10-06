import React from "react";

export function Contacts() {
    return <h1>contact</h1>;
}

export function Chat(){
    return <h1>chat</h1>;
}

export default function ComponentProps(props) {

    
    return (
        <div onClick={component}>
            {props.left}
           {props.right}
           
        </div>
    );
}

