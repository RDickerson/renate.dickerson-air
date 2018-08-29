import React from "react"

const CurrentStatus = (props) => {
    const style = {
        fontSize: "200px"
    }
    return(
        <div style={style}>
            {props.status ?
            <h1 onClick={props.thisThing}>&#128077;
            </h1>
            :
            <h1 onClick={props.thisThing}>&#128078;</h1>
            }
        </div>
    )
}

export default CurrentStatus