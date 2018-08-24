import React from "react"

const card = {
    // display: "inline",
    border: "3px solid black",
    padding: "26px",
    textAlign: "center"
  }

const VacationSpots = (props) => {
    return (
        <div style={card}>
            <h1>{props.place}</h1>
            <h3>{props.price}</h3>
        </div>
    )
        
    
}

export default VacationSpots