var redux = require("redux")

var state = {
    contacts: []
}

function addPerson(name, phone, email) {
    return {
        type: "ADD_PERSON",
        name: name,
        phone: phone,
        email: email
    }
}

function removePerson(name) {
    return {
        type: "REMOVE_PERSON",
        name: name
    }
}

function reducer(prevState = state, action){
    switch (action.type) {
        case "ADD_PERSON":
            return {
                contacts: [...prevState.contacts, {
                name: action.name,
                phone: action.phone,
                email: action.email}]
            }
        case "REMOVE_PERSON": 
            return {
                contacts: prevState.contacts.filter(person => person.name !== action.name && person)
            }
        default: 
            return prevState
    }
}

var store = redux.createStore(reducer)



store.subscribe(function(){
    console.log(store.getState())
})



store.dispatch(addPerson("Renate", "208.313.9064", "renate.dickerson@gmail.com"))
store.dispatch(addPerson("Jacob", "000.000.0000", "email@emil.com"))
store.dispatch(addPerson("Hillary", "000.000.0000", "email@email.com"))

store.dispatch(removePerson("Jacob"))