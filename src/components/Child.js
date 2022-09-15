import React from 'react'
import Parent from './Parent'

function Child() {
    return (
        <div>
            <button onClick = {this.onclickHandler}>Child button</button>
            <Parent> </Parent>

        </div>
    )
}

export default Child