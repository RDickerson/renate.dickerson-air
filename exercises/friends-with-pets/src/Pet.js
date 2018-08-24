import React from "react"

const Pet = (props) => {
    return (
        <ul>
            <li>Name: {props.name}</li>
            <li>Breed: {props.breed}</li>
        </ul>
    )
}

export default Pet