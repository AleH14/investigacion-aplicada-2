const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

// schema de nuevo usuario
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
},
{
    timestamps: true
})

// para hashear la contraseña
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next()
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

// para comprar contraseñas
userSchema.method('comparePass',async function (password) {
    return await bcrypt.compare(password, this.password)
})

module.exports =  mongoose.model('user', userSchema)