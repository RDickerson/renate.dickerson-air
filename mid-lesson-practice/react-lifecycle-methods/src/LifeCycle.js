import React, {Component} from "react"

class LifeCycle extends Component {
    constructor() {
        super()

        this.state = {
            backgroundColor: "white"
        }
    }

    componentDidMount() {
        window.addEventListener("keydown", e => {
            switch(e.code) {
                case "KeyA":
                    return this.setState({backgroundColor: "aquamarine"})
                case "KeyB":
                    return this.setState({backgroundColor: "blueviolet"})
                case "KeyC":
                    return this.setState({backgroundColor: "crimson"})
                case "KeyD":
                    return this.setState({backgroundColor: "darkolivegreen"})
                case "KeyF":
                    return this.setState({backgroundColor: "forestgreen"})
            }
            // if (e.code === "KeyB") {
            //     this.setState({
            //         backgroundColor: "black"
            //     })
            // } else if (e.code === "KeyA") {
            //     this.setState({
            //         backgroundColor: "red"
            //     })
            // }
        })
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", null)
    }

    render(){
        const styles = {
            main: {
                backgroundColor: this.state.backgroundColor
            },
            big: {
                fontSize: "100px"
            }
        }
        return (
            <div style={styles.main}>
                <h1>Click Buttons</h1>
                <p style={styles.big}>NOW!!!!</p>
            </div>
        )
    }
}

export default LifeCycle