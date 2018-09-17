//Create a simple Express Server that manages a list of todos (which at this point will just be held in an array on the server, since we haven't gotten to including databases yet).
//Todos should have a data format similar to:
// {
//     "name": "The name",
//     "description": "The description of the todo"
//     "imageUrl": "http://www.myimage...."
//     "completed": false
//     "_id": "23k4lh23h2"
// }

//Create endpoints that:
// -allows new todo items to be posted to the array,
    // -When posting a new todo, you must generate a unique id for that todo (consider using the uuid npm package),
// -returns the entire list of todos,
// -allows the user to update a todo by its _id,
// -allows the user to delete a todo by its _id, and
// -allows the user retrieve a single todo by its _id.

const express = require("express")
const uuid = require("uuid/v4")
const app = express()


const todos = [
    {
        name: "thing",
        description: "I need to do this",
        imageUrl: "some url",
        completed: false,
        id: uuid()
    },
    {
        name: "thing to",
        description: "I need to do this",
        imageUrl: "some url",
        completed: false,
        id: uuid()
    },
    {
        name: "thing to do",
        description: "I need to do this",
        imageUrl: "some url",
        completed: false,
        id: uuid()
    }
]

app.get("/todo", (req, res) => {
    res.send(todos)
})

app.get("/todo/:id", (req, res) => {
    res.send(req.params.id)
})

app.post("/todo", (req, res) => {
    todos.push(req.body)
    res.send(todos)
})

app.put("/todo/:id", (req, res) => {
    const foundTodo = indexOf(req.params.id)
    todos.splice(foundTodo, 1, req.body)
    res.send(todos)
})

app.delete("/todo/:id", (req, res) => {
    const foundTodo = indexOf(req.params.id)
    todos.splice(foundTodo, 1)
    res.send(todos)
})

app.listen(2689, () => {
    console.log("Server up and running on port 2689")
})