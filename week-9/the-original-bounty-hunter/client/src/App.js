import React, { Component } from 'react';
import axios from "axios"

class App extends Component {
  constructor() {
    super()

    this.state = {
      bounties: []
    }
  }

  componentDidMount() {
    axios.get("/bounty").then(res => {
      console.log(res.data)
      this.setState({
        bounties: res.data
      })
    })
    // axios.put("/bounty/id")
  }

  render() {
    return (
      <div>
        {this.state.bounties}
      </div>
    );
  }
}

export default App;
