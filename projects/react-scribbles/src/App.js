import React, {Component} from "react"


// const App = () => {
//   console.log(this)
//   return (
//     <h1>Hello World</h1>
//   )
// }

class App extends Component {
  constructor(){
    super()
    console.log(this)


  }

  render() {
    
    return (
      <h1>Hello World</h1>
    )
  }
  
}

export default App