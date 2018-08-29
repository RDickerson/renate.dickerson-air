import React, {Component} from "react"

class Form extends Component {
    constructor () {
        super()

        this.state = {
            fName: "",
            lName: "",
            age: "",
            favPet: "",
            isHappy: false,
            infoArr: []
        }
    }

    handleChange = e => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        const {name} = e.target
        this.setState({[name]: value})
    }

    handleSubmit = e => {
        e.preventDefafult()
        alert(`Name: ${this.state.fName} ${this.state.lName}</h1>\n
            Age: ${this.state.age}\n
            Favorite Pet: ${this.state.favPet}\n
            I am ${this.state.isHappy ? "Happy" : "Sad"}`)
    }

    render() {

        // let checkHappy
        // if(this.isHappy.value) {
        //     checkHappy = "happy"
        // } else {
        //     checkHappy = "sad"
        // }

        // const info = this.state.infoArr.map(stuff => stuff.fName, stuff.lName, stuff.age, stuff.favPet, stuff.isHappy )

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" name="fName" placeholder="First Name" value={this.state.fName}/>
                    <input onChange={this.handleChange} type="text" name="lName" placeholder="Last Name" value={this.state.lName}/>
                    <input onChange={this.handleChange} type="number" name="age" placeholder="Age" value={this.state.age}/>
                    <select onChange={this.handleChange} name="favPet">
                        <option value=""></option>
                        <option value="cat">Cat</option>
                        <option value="dog">Dog</option>
                        <option value="pig">Pig</option>
                        <option value="bunny">Bunny</option>
                    </select>
                    <label>Are you Happy?<input onChange={this.handleChange} type="checkbox" name="isHappy" checked={this.state.isHappy}/></label>
                    <button>Display</button>                    
                </form>
            </div>
        )
    }

}

export default Form