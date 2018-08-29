import React from "react"

const People = (props) => {

    const styles = {
        div: {
            border: "3px solid black",
            marginBottom: "20px",
            width: "300px",
            backgroundColor: props.stateEye,
            color: props.stateGender,
            height: props.stateHeight,
            textAlign: "center"
        },
        button: {
            marginLeft: "5px"
        }

    }

    console.log(props.stateHeight)

    return (
        <div style={styles.div}>
            <h1>{props.name}</h1>
            <p>{props.stateHeight}</p>
            <button style={styles.button} onClick={props.eyeFunction}>Eye Color</button>
            <button style={styles.button} onClick={props.genderFunction}>Gender</button>
            <button style={styles.button} onClick={props.heightFunction}>Height</button>

        </div>
    )
}

export default People