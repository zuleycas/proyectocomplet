// app.js  
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./userRoutes');
const User = require('./user');


const app = express();


  

// En tu archivo app.js (o donde configures las rutas)
app.get('/registro/usuarios', (req, res) => {
    // Manejar la solicitud GET para /registro/usuarios aquí
    res.send('Esta es la página de registro de usuarios');
});


// Middleware para parsear JSON
app.use(express.json());

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/registro', {
 
     
})
.then(() => console.log('Conexión exitosa a la base de datos'))
.catch(err => console.error('Error al conectar a la base de datos', err));

// Rutas de usuario
app.use('/usuarios', userRoutes);

// Puerto del servidor
const PORT = process.env.PORT || 3001;

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
