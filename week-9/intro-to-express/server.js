const express = require("express")
const app = express()


//arg1: what endpoint is the request too?
//arg2: (request, response)
//then: function
app.get("/", (req, res) => {

    // Mongoose ode to get the stuff from the database
    
    res.send(`what do you want to respond to user`)
})
//res.send is like return it ends the function







app.listen(2689, () => {
    console.log(`We're live!`)
})

