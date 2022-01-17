import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Mzaza'
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Mzaza'
            })
        },2000)
    }
    
    render() {
        console.log("Parent component render")
        return (
            <div>
                Parent Component
                <RegComp name={this.state.name}></RegComp>
                <PureComp name={this.state.name}></PureComp>
            </div>
        )
    }
}

export default ParentComponent
