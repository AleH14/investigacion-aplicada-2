const express = require('express')
const { register, login, access, logout } = require('../controllers/authController.js')
const { protect } = require('../middleware/authMiddleware.js')

const authRoutes = express.Router()

// post para nuevo usuario
authRoutes.post("/register", register)

// post para verificar si existe el usuario y darle 
authRoutes.post("/login", login)

// verifica token con protect y accede a access si es aprobado
authRoutes.get("/protected-resource", protect, access)

// logout
authRoutes.post("/logout", protect, logout)

module.exports = authRoutes