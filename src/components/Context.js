import React from 'react';
import { ContextObject } from '../App';


export default function Context() {
    return (
        <ComponentA />
    )
}

export function ComponentA() {
    return (
        <>
            <ComponentB />
            <ContextObject.Consumer>
                {
                    (name) => <h1>inside componentA {name}</h1>
                }
            </ContextObject.Consumer>
        </>

    )
}

export function ComponentB() {
    return (
        <ContextObject.Consumer>
            {
                (name) => <h1>{name}</h1>
            }
        </ContextObject.Consumer>

    )
}