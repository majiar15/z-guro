const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let epsSchema = new Schema({
    id: Number,
    nombre: String,
    direccion: String,
    lat: Number,
    long: Number
});

module.exports = mongoose.model('eps', epsSchema,'eps');