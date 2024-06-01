//  userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('./user');

// Ruta para el registro de usuarios
router.post('/registro', async (req, res) => {
    try {
        const { nombre, apellido, usuario, contraseña } = req.body;
        // Verifica si el usuario ya existe
        let usuarioExistente = await User.findOne({ usuario });
        if (usuarioExistente) {
            return res.status(400).json({ mensaje: 'El usuario ya existe' });
        }
        // Crea un nuevo usuario
        const nuevoUsuario = new User({
            nombre,
            apellido,
            usuario,
            contraseña
        });
        // Guarda el usuario en la base de datos
        await nuevoUsuario.save();
        res.status(201).json({ mensaje: 'Usuario registrado exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error en el servidor' });
    }
});

module.exports = router;
