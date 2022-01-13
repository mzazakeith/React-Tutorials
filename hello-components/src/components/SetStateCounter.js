import React, { Component } from 'react'

class SetStateCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }

    // increament(){
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    // }

    increament(){
        this.setState(prevState => ({
            count:prevState.count + 1
        }))
    }
    
    render() {
        return (
            <div>
                <p>Count {this.state.count}</p>
                <button onClick={() => this.increament()}>increament</button>
            </div>
        )
    }
}

export default SetStateCounter
