const express = require("express")
const app = express()
const bodyParcer = require("body-parser")
const morgan = require("morgan")

app.use(bodyParcer.json())
app.use(morgan("dev"))

app.get("/", (req, res) => {
    res.send("hello World")
})

app.listen(5500, () => {
    console.log("Server is running on Port 5500")
})