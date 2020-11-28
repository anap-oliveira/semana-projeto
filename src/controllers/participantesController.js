const participantes = require('../models/participantes')

const getAll = (req, res) => {
    res.status(200).send({ message: "Todas participantes"})
}



module.exports = {
    getAll
}