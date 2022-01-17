import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name:'Mzaza'
        }
        console.log("Lifecycle B constructor")
    }

    static getDerivedStateFromProps(props, state){
        console.log("get derived state from props B")
        return null
    }

    componentDidMount(){
        console.log('Lifecycle B component did mount')
    }
    
    render() {
        console.log("Lifecycle B render")
        return (
            <div>
                Life cycle B
            </div>
        )
    }
}

export default LifecycleB
