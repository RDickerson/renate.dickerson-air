import {createStore} from "redux"

//initial state
const initState = {
    img: "",
    title: "",
    description: "",
    uglyThings: []
}

//action creators
const addUgly = () => {
    return {
        type: "ADD_UGLY"
    }
}
//reducer

const reducer = (prevState = initState, action) => {
    switch(action.type){
        case "ADD_UGLY":
            return {
                img: prevState.img,
                
            }
        default:
            return prevState
    }
}

//export

exoprt default createStore(reducer)