import React, {Component} from 'react';

const styleH1 = {
  textWeight: "bold",
  textAlign: "Center",
  fontSize: "90px"
}

const styleButtons = {
  display: "flex",
  justifyContent: "space-around",
}

const styleIndividuleButton = {
  fontSize: "20px"
}

class App extends Component {
  constructor(){
    super()
    
    //Your state will always be inside of a constructor
    //this.state is simply an object with key value pairs
    this.state = {
      counter: 0
    }

    // this.addNum = this.addNum.bind(this)
  }

  //old syntax
  // addNum() {

  // }

  //This is the method you are creating to add one to your counter
  addMeasurement = () => {
    //this.setState is the built-in method you will use ANYTIME you want to change your state.
    //prevState is the previous value of your state object
    this.setState(prevState => {
      return {
        counter: prevState.counter + 5
      }
    })
  }

  addLabel = () => {
    this.setState(prevState => {
      return {
        counter: prevState.counter + 1
      }
    })
  }

  clear = () => {
    this.setState({counter: 0})
  }

  removeLabel = () => {
    this.setState(prevState => {
      return {
        counter: prevState.counter - 1
      }
    })
  }

  removeMeasurement = () => {
    this.setState(prevState => {
      return {
        counter: prevState.counter - 5
      }
    })
  }

  render(){
    return (
      <div>
        {/* To use anything from your state you will call it like the example show below in the h1 tag */}
        <h1 style={styleH1}>Points:</h1>
        <h1 style={styleH1}>{this.state.counter}</h1>
        <div style={styleButtons}>
          <button style={styleIndividuleButton} onClick={this.addLabel}>Label</button>
          <button style={styleIndividuleButton} onClick={this.addMeasurement}>Measurement</button>
          <button style={styleIndividuleButton} onClick={this.clear}>Clear All</button>
          <button style={styleIndividuleButton} onClick={this.removeLabel}>Remove 1 Label</button>
          <button style={styleIndividuleButton} onClick={this.removeMeasurement}>Remove 1 Measurement</button>
        </div>
      </div>
    )
  }
}


export default App;
