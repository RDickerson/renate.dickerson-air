import React, { Component } from 'react';


class Form extends Component {
    constructor (){
        super() 

        this.state = {
            myName: '',
            age: '',
            pet: '',
            occupation: '',
            homeTown: ''
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
        console.log(this.state)
    }

    handleSubmit = event => {
        event.preventDefault()
        alert(`Name: ${this.state.myName}\nAge: ${this.state.age}`)
    }

    render() {
        const styleing = {
            display: 'flex',
            flexDirection: 'column',
            width: '300px'
        }
        const button = {
            width: '150px'
        }

        return (
            <form style={styleing} onSubmit={this.handleSubmit}>
                <input type="text" name='myName' placeholder='Full Name' value={this.state.myName} onChange={this.handleChange}  />
                <input type="text" name='age' placeholder='Age' value={this.state.age} onChange={this.handleChange} />
                <input type="text" name='pet' placeholder='Favorite Pet' value={this.state.pet} onChange={this.handleChange}/>
                <input type="text" name='occupation' placeholder='Occupation' value={this.state.occupation} onChange={this.handleChange}/>
                <input type="text" name='homeTown' placeholder='Home Town' value={this.state.homeTown} onChange={this.handleChange}/>
                <button style={button}>Submit</button>
            </form>
        );
    }
}

export default Form;