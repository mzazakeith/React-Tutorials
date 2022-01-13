import React, { Component } from 'react'

class Eventbind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"hello"
        }
        // method 3 this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         message:"Goodbye"
    //     })
    // }

    // method 4
    clickHandler = () => {
        this.setState({
            message:'Goodbye'
        })
    }
    
    render() {
        return (
            <div>
                <p>{this.state.message}</p>
               {/* method 1 <button onClick={this.clickHandler.bind(this)}>Click here</button> */}
              {/* method 2  <button onClick={()=>this.clickHandler()}>Click here</button> */}

              {/* method 3 and 4 */}
            <button onClick={this.clickHandler}>Click here</button>

            </div>
        )
    }
}

export default Eventbind
