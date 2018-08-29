import React from 'react';
import Greeting from './Greeting';

const App = () => {
  return (
    <Greeting />
  )
}




// class App extends Component {
//   constructor(){
//     super()

//     this.state = {
//       status: true
//     }
//   }

//   handleClick = e => {
//     this.setState(prevState =>{
//       return {
//         status: !prevState.status
//       }
//     })
//   }

//   render() {
//     return (
//         <Follow status={this.state.status} handleClick={this.handleClick}/>
//     )
//   }
// }

export default App;