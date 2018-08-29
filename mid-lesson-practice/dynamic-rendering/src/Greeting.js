import React, {Component} from 'react';
import CurrentStatus from "./CurrentStatus"

class Greeting extends Component {
    constructor(){
        super()

        this.state = {
            status: true,
        }
    }

    handleClick = e => {
        this.setState(prevState => {
           return {status: !prevState.status}
        })
    }

    render() {
        return (
            <CurrentStatus status={this.state.status} thisThing={this.handleClick}/> 
        )
            
        
    }
}


export default Greeting;