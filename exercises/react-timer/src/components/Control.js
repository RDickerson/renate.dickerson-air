import React from 'react'
import {connect} from "react-redux"
import {tick, clear, lap} from "../redux"
import Lap from "./Lap"

let interval;

const Control = (props) => {

    const start = () => {
        if (!interval){
            interval = setInterval(props.tick, 10)
        }
    }

    const end = () => {
        clearInterval(interval)
        interval = false
    }

    const lap = props.laps.map((lap, i) => <Lap key={lap.mins + i} {...lap}/>)


    return (
        <div>
            <button onClick={start}>Start</button>
            <button onClick={end}>Stop</button>
            <button onClick={props.clear}>Clear</button>
            <button onClick={props.lap}>Lap</button>
            {lap}
        </div>
    )
};

export default connect(state=>state, {tick, clear, lap})(Control)