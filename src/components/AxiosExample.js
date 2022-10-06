import React, { useState, useEffect } from "react";
import AxiosComponent, { AxiosComponent2 } from "./AxiosComponent";

export default function AxiosExample() {
    const [operation, setOperation] = useState(null)

    const handleFetch = (event) => {
        setOperation(event.target.value)
    }
    return (
        <>
            <p>Select operation:</p>
            <div>
                <button onClick={handleFetch} value="all">Get all</button>
                <button onClick={handleFetch} value="id">Get ID</button>
            </div>

            {operation === null ? console.log("null value") : (operation === "all") ? <AxiosComponent operation={operation} /> : <AxiosComponent2 />}
        </>
    )
}
