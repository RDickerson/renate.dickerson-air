import {createStore} from "redux"

const initState = {
    mins: 0,
    secs: 0,
    millaSecs: 0,
    laps: []
}

export const tick = () => {
    return {
        type: "TICK"
    }
}

export const clear = () => {
    return {
        type: "CLEAR"
    }
}

export const lap = () => {
    return {
        type: "LAP"
    }
}

const reducer = (prevState = initState, action) => {
    switch (action.type){
        case "TICK":
            if (prevState.secs === 60){
                return {
                    mins: prevState.mins + 1,
                    secs: 0,
                    millaSecs: 0,
                    laps: prevState.laps
                }
            }else if (prevState.millaSecs === 100){
                return {
                    mins: prevState.mins,
                    secs: prevState.secs + 1,
                    millaSecs: 0,
                    laps: prevState.laps
                }
            } else {
                return {
                    mins: prevState.mins,
                    secs: prevState.secs,
                    millaSecs: prevState.millaSecs + 1,
                    laps: prevState.laps
                }
            }
        case "CLEAR": 
            return {
                secs: 0,
                mins: 0,
                millaSecs: 0,
                laps: prevState.laps
            }
        case "LAP": 
            const lap = {
                mins: prevState.mins,
                secs: prevState.secs,
                millaSecs: prevState.millaSecs,
                laps: prevState.laps
            }
            return {
                mins: prevState.mins,
                secs: prevState.secs,
                millaSecs: prevState.millaSecs,
                laps: [...prevState.laps, lap]
            }
        default: return prevState
        
    }
    
}

export default createStore(reducer)