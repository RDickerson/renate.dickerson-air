import React, {Component} from "react"
import axios from "axios"
import People from "./People"

class App extends Component {
  constructor() {
    super()

    this.state = {
      data: [],
      backgroundColor: "white",
      fontColor: "black",
      height: "175px"
    }
  }

  componentDidMount(){
    axios.get("https://swapi.co/api/people/").then(response => {
      // console.log(response.data.results)
      this.setState({
        data: response.data.results 
      })
    }).catch(err => {
      console.log(err)
    })
  }

  handleEyeClick(eyeColor) {
    console.log(eyeColor)
    this.setState({
      backgroundColor: eyeColor
    })
  }

  handleGenderClick(gender){
    console.log(gender)
    const isMale = gender === "male" ? "blue" : "pink"
    this.setState({
      fontColor: isMale
    })
  }

  handleHeightClick(height) {
    console.log(height)
    this.setState({
      height: `${height}px`
    })
  }

  render(){

    const mappedStarWarsPeople = this.state.data.map(person => <People 
      key={person.url} 
      {...person} 
      eyeFunction={() => this.handleEyeClick(person.eye_color)}
      stateEye={this.state.backgroundColor}

      genderFunction={() => this.handleGenderClick(person.gender)}
      stateGender={this.state.fontColor}

      heightFunction={() => this.handleHeightClick(person.height)}
      stateHeight={this.state.height}
      /> )

    // const styles = {
    //   div: {
    //       backgroundColor: this.state.backgroundColor,
    //       color: this.state.fontColor,
    //       height: this.state.height,
    //   }

    // }
  
    return(
      <div>
        <div>{mappedStarWarsPeople}</div>
      </div>
    ) 
  }
}

export default App