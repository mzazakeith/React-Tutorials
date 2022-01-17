import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name:'Mzaza'
        }
        console.log("Lifecycle A constructor")
    }

    static getDerivedStateFromProps(props, state){
        console.log("get derived state from props A")
        return null
    }

    componentDidMount(){
        console.log('Lifecycle A component did mount')
    }

    render() {
        console.log("Lifecycle A render")
        return (
            <div>
            <div>Life cycle A</div>
            <LifecycleB/>
            </div>
        )
    }
}

export default LifecycleA
