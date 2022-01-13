import React, { Component } from 'react'

class ClassEventClick extends Component {
    clickHandler() {
        console.log('Class component button clicked')
    }
    render() {
        return (
            <div>
                <br/>
                <button onClick={this.clickHandler}>Click me</button>
            </div>
        )
    }
}

export default ClassEventClick
