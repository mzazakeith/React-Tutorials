import React , {Component} from 'react'

class PropsClassHi extends Component{
    render(){
        return <h1>Welcome {this.props.Name} aka {this.props.HeroName}</h1>
    }
}

export default PropsClassHi