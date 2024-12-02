const express = require('express');
const dbconnect = require('./config');
const userRouter = require('./users/router');
const app = express()

const router = express.Router()

app.use(express.json())

app.use('/api', userRouter)


app.listen(3001, () => {
    console.log('servidor en el puerto 3001');
})

dbconnect()