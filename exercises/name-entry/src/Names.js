import React, {Component} from "react"
import NameList from "./NameList"

class Names extends Component {
    constructor () {
        super()

        this.state = {
            name: "",
            allNames: []
        }
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState(prevState => {
            return {
                allNames: [prevState.name, ...prevState.allNames]
            }
        })
        console.log(this.state.allNames)
    }

    render() { 

        const seperateNames = this.state.allNames.map((name, i) => {
            return <NameList 
                key = {name + i}
                name = {name}
            />
        })
        
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" placeholder="Enter Name" value={this.state.name} onChange={this.handleChange}/>
                    
                    <h1>This is a preview of your text: <span>{this.state.name}</span></h1>
                    <button>Add To List</button>
                </form>
                <ul>
                    {seperateNames}
                </ul>
            </div>
        )
    }
}

export default Names