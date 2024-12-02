require('dotenv').config()
const mongoose = require('mongoose')

const mongoURI = process.env.MONGO_URI

const dbconnect = () => {
    mongoose.set('strictQuery', true)
    mongoose.connect(mongoURI).then(()=>{
        console.log("conexion exitosa");
    }).catch(()=> {
        console.log("error en conexion");
    })
}

module.exports = dbconnect