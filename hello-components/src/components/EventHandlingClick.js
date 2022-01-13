import React from 'react'

function EventHandlingClick() {
    function clickHandler(){
        console.log("Button clicked")
    }
    return (
        <div>
            <br/>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default EventHandlingClick
