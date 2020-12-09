const mongoose = require('mongoose');

const participantesSchema = new mongoose.Schema({
    id: { type: Number },
    name: { type: String },
    age: { type: Number },
    city: { type: String },
    email: { type: String },
    phone: { type: Number },
    publishedbook: { type: Boolean }
}, {
    versionKey: false
});

const participantes = mongoose.model('participantes', participantesSchema)

module.exports = participantes;