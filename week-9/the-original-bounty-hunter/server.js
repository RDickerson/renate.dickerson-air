const express = require("express")
const uuid = require("uuid/v4")
const bodyParser = require("body-parser")
const app = express()

const bounties = [
    {
        firstName: "Someone",
        lastName: "Tokill",
        isAlive: true,
        reward: 10000,
        type: "Sith",
        id: uuid()
    },
    {
        firstName: "The",
        lastName: "Boss",
        isAlive: true,
        reward: 10000,
        type: "Sith",
        id: uuid()
    },
    {
        firstName: "Bad",
        lastName: "Driver",
        isAlive: true,
        reward: 10000,
        type: "Sith",
        id: uuid()
    }
]

app.use(bodyParser.json())

app.get("/bounty", (req, res) => {

    res.send(bounties)

})

app.get("/bounty/:id", (req, res) => {
    const foundBounty = bounties.find(bounty => bounty.id === req.params.id)
    res.send(foundBounty)
})

app.post("/bounty", (req, res) => {
    req.body.id = uuid()
    bounties.push(req.body)
    console.log(req.body)
    res.send({message: "Successfully Added New Bounty", infoAdded: req.body})
})

app.put("/bounty/:id", (req, res) => {
    const foundBounty = bounties.findIndex(bounty => bounty.id === req.params.id)
    bounties.splice(foundBounty, 1, req.body)
    res.send({message: "Successfully Updated Bounty", newArr: bounties})
})

app.delete("/bounty/:id", (req, res) => {
    const foundBounty = bounties.findIndex(bounty => bounty.id === req.params.id)
    console.log(foundBounty)
    bounties.splice(foundBounty, 1)
    res.send({message: "Successfully Deleted Bounty", newArr: bounties})
})

app.listen(2689, () => {
    console.log("Server running on port 2689.")
})