import React from "react"
import Friend from "./Friend"
// import Pet from "./Pet"


const friends = [
    {
    name: "Ben",
    age: 29,
    pets: [
        {
        name: "spot",
        breed: "tabby"
        },{
        name: "John Johnson",
        breed: "husky"
        },{
        name: "Bear the bear",
        breed: "Grizzly"
        }
        ]
    },{
    name: "Bob",
    age: 31,
    pets: [
        {
        name: "Sally",
        breed: "Australian Shepard"
        }
        ]
    },{
    name: "Marcus",
    age: 25,
    pets: [
        {
        name: "Indy",
        breed: "Akita"
        },{
        name: "Anna",
        breed: "persian cat"
        }
        ]
    },{
    name: "Jacob",
    age: 20,
    pets: [
        {
        name: "fluffy",
        breed: "sphynx cat"
        },{
        name: "patches",
        breed: "sphynx cat"
        },{
        name: "tiger",
        breed: "sphynx cat"
        },{
        name: "oscar",
        breed: "sphynx cat"
        }
        ]
    }
]

// const animals = friends.map((person) => {
//     return person.pets.map((pet, i) => {
//         return <Pet 
//             key = {pet.name + i}
//             name = {pet.name}
//             breed = {pet.breed} 
//         />
//     })
// })

const people = friends.map((person, i) => {
    return (
        <Friend
            key = {person.name + i}
            name = {person.name}
            age = {person.age}
            pets = {person.pets}
        />
    )
})

const FriendsList = () => {
    return (
        <div>
            {people}
            {/* {animals} */}
        </div>
    )
}

export default FriendsList