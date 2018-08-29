import React, {Component} from "react"
import SayHello from "./SayHello"



const App = () => {
  console.log(this)
  return (
    <SayHello />
  )
}

// class App extends Component {
//   constructor(){
//     super()
//     console.log(this)


//   }

//   render() {
    
//     return (
//       <h1>Hello World</h1>
//     )
//   }
  
// }

export default App