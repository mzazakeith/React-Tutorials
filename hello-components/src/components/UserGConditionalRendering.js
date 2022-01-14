import React, { Component } from 'react'

class UserGConditionalRendering extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
            // isLoggedIn: false
        }
    }

    render() {
        return this.state.isLoggedIn && <div><br/><h1>Welcome Mzaza</h1></div>
        // return (
        //     this.state.isLoggedIn?
        //     (<div><h1>Welcome Mzaza</h1></div>):
        //     (<div><h1>Welcome Guest</h1></div>)
        // )
    }
}

export default UserGConditionalRendering
