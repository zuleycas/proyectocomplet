// user.js
const mongoose = require('mongoose');

// Define el esquema del usuario
const userSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    usuario: {
        type: String,
        required: true,
        unique: true
    },
    contraseña: {
        type: String,
        required: true
    }
});

// Crea el modelo de usuario
const User = mongoose.model('User', userSchema);

module.exports = User;
