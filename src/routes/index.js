const express = require("express")
const router = express.Router()

router.get("/", function (req, res) {
    res.status(200).send({
        title: "Pretas em Poesia - O Poder e a resistência na voz",
        version: "1.0.0"
    })
})

module.exports = router