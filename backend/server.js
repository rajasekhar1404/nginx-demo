const express = require('express')
const app = express()


app.get("/", (req, res) => {
    res.send("Welcome to node js application")
})

app.listen(7777, () => {
    console.log("Listening on port 7777")
})