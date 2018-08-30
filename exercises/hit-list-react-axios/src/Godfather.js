import React, {Component} from "react"
import axios from "axios"
import HitList from "./HitList"

class Godfather extends Component {
    constructor(){
        super()

        this.state= {
            data: [],
        }
    }


    componentDidMount(){
        axios.get("http://api.vschool.io:6543/hitlist.json").then(response => {
            console.log(response.data)
            const hitList = response.data.slice(0, response.data.length -1)
            console.log(hitList)
            this.setState({
                data: hitList
            })
            
        })
    }

    render(){

        const info = this.state.data.map((person, i) => <HitList key={person.name + i} {...person}/>)

        return(
            <div>
                {info}
            </div>
        )
    }
}

export default Godfather