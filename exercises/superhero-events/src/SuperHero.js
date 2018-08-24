import React from "react"

const SuperHero = (props) => {
   
    const phrase = () => {
        alert(props.catchPhrase)
    } 
    

    return (
        <div onClick={phrase}>
            <img src={props.img} alt=""/>
            <h1>{props.name}</h1>
        </div>
    )
}


export default SuperHero