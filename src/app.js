const express = require("express")
const bodyParser = require("body-parser")

const app = express()

const participantes = require("./routes/participantesRoute")

app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*") 
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
})

app.use("/participantes", participantes)

module.exports = app

