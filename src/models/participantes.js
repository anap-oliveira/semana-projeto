const mongoose = require('mongoose');

const participantesSchema = new mongoose.Schema({
    id: { type: String },
    name: { type: String },
    age: { type: String },
    city: { type: String },
    email: { type: String },
    phone: { type: Number },
    publishedbook: { type: Boolean }
}, {
    versionKey: false
});

const participantes = mongoose.model('participantes', participantesSchema)

module.exports = participantes;