const participantes = require("../models/participantes");

const getAll = (req, res) => {
    participantes.find(function (err, participantes) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send(participantes)
        }
    })
}

const getById = (req, res) => {
    
    const inputId = req.params.id
    participantes.findOne( {id:inputId}, function (err, participante) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send(participante)
        }
    })
}


const postParticipantes = (req, res) => {
    let participante = new participantes(req.body)

    participante.save(function(err){
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(201).send({ message: "Participante adicionado com sucesso"})
        }
    })
}


const putParticipantes = (req, res) => {
    const inputId = req.params.id
    participantes.updateOne({ id: inputId }, { $set: req.body }, { upsert: false }, function (err){
        if (err) {
            res.status(500).send({message: err.message })
        } else {
            res.status(200).send({ message: "Participante atualizado com sucesso"})
        }
    })
}


const deleteParticipantes = (req, res) => {
    const inputId = req.params.id
    participantes.deleteOne({ id: inputId }, function (err){
        if (err) {
            res.status(500).send({message: err.message })
        } else {
            res.status(200).send({ message: "Participante removida com sucesso"})
        }
    })
}


module.exports = {
    getAll,
    getById,
    postParticipantes,
    deleteParticipantes,
    putParticipantes
}