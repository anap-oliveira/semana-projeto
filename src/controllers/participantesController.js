const participantes = require("../models/participantes");
const SECRET = process.env.SECRET;
const jwt = require("jsonwebtoken");


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
    const id = req.params.id
    participantes.find({ id }), function (err, participantes) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send(participantes)
        }
    }
}


const postParticipantes = (req, res) => {
    let participantes = new participantes(req.body)

    participantes.save(function(err){
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(201).send({ message: "Participante adicionado com sucesso"})
        }
    })
}


const putParticipantes = (req, res) => {
    const id = req.params.id
    participantes.updateMany({ id }), { $set: req.body }, { upsert: true }, function (err){
        if (err) {
            res.status(500).send({message: err.message })
        } else {
            res.status(200).send({ message: "Participante atualizado com sucesso"})
        }
    }
}


const deleteParticipantes = (req, res) => {
    const id = req.params.id
    participantes.deleteMany({ id }), function (err){
        if (err) {
            res.status(500).send({message: err.message })
        } else {
            res.status(200).send({ message: "Participante removida com sucesso"})
        }
    }
}


module.exports = {
    getAll,
    getById,
    postParticipantes,
    deleteParticipantes,
    putParticipantes
}