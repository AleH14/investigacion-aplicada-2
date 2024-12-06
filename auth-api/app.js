const express = require('express');
const dbconnect = require('./config');
const authRoutes = require('./routes/authRoutes.js');

const app = express()

app.use(express.json())

// conectar a bd
dbconnect()

// accede a /api y redirecciona a rutas de "authRoutes"
app.use('/api', authRoutes)

// inciar servidor
app.listen(3001, () => {
    console.log('servidor en el puerto 3001');
})