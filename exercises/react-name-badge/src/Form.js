import React, { Component } from 'react';
import Badge from "./Badge"

class Form extends Component {
    constructor(){
        super()

        this.state= {
            fName: "",
            lName: "",
            email: "",
            birthPlace: "",
            phone: "",
            favFood: "",
            info: "",
            formInfo: []
        }
    }

    handleChange = (e) => {
        // console.dir(e.target)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const newFormInfo = {
            fName: this.state.fName,
            lName: this.state.lName,
            email: this.state.email,
            birthPlace: this.state.birthPlace,
            phone: this.state.phone,
            favFood: this.state.favFood,
            info: this.state.info
        }
        
        this.setState(prevState => {
            console.log(prevState.formInfo)
            return {formInfo: [...prevState.formInfo, newFormInfo]}
        })
    }
    
    
    render() {
        const passing = this.state.formInfo.map(badge => <Badge {...badge}/>)

        const styles = {
            div: {
                display: "grid",
                gridTemplate: "repete(3, 30px) 90px 30px / 1fr 1fr",
                width: "500px",
                border: "3px solid black"
            },
            input: {
                gridColumn: "1/2",
                gridRow: "1/4",
            },
            inputTwo: {
                gridColumn: "2/-1",
                gridRow: "1/4",
            }
        }

        return (
            <div>
                <form style={styles.div} onSubmit={this.handleSubmit}>
                    <input style={styles.inputOne} onChange={this.handleChange} type="text" name="fName" placeholder="First Name" value={this.state.fName}/>
                    <input style={styles.inputTwo} onChange={this.handleChange} type="text" name="lName" placeholder="Last Name" value={this.state.lName}/>
                    <input style={styles.inputOne} onChange={this.handleChange} type="email" name="email" placeholder="Email" value={this.state.email}/>
                    <input style={styles.inputTwo} onChange={this.handleChange} type="text" name="birthPlace" placeholder="Place of Birth" value={this.state.birthPlace}/>
                    <input style={styles.inputOne} onChange={this.handleChange} type="tel" name="phone" placeholder="Phone" value={this.state.phone}/>
                    <input style={styles.inputTwo} onChange={this.handleChange} type="text" name="favFood" placeholder="Favorite Food" value={this.state.favFood}/>
                    <input onChange={this.handleChange} type="text" name="info" placeholder="Tell us about yourself" value={this.state.info}/>
                    <button>Submit</button>
                </form>
                {passing}
            </div>

        );
    }
}

export default Form;