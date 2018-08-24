import React from "react"
import Pet from "./Pet"


const Friend = (props) => {
    const animal = props.pets.map((pet, i) => {
        return <Pet
        key = {pet.name + i}
        name = {pet.name}
        breed = {pet.breed}
        />
    })
    return (
        <div>
            <h1>{props.name}</h1>
            <h3>Age: {props.age}</h3>
            <div>
                <span>Pets</span>
                {animal}
            </div>
        </div>
    )
}

export default Friend

