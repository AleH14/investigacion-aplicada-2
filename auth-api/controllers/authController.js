const User = require('../model/userModel.js')
const jwt = require('jsonwebtoken')
const protect = require('../middleware/authMiddleware.js')

// registrar usuario
const register = async (req, res) => {
    try {
        const { username, email, password } = req.body
        const user = await User.create({ username, email, password })
        res.status(201).json({ message: "Usuario registrado exitosamente", user })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// login
const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });

        if (!user) {
            return res.status(401).json({ message: "Usuario no encontrado" });
        }
        
        const isMatch = await user.comparePass(password);
        if (!isMatch) {
            return res.status(401).json({ message: "Credenciales incorrectas" });
        }

       // si coinciden las credenciales se crea un token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// acceder a un recurso (algo de productos por ejemplo)
const access = (req, res) => {
    res.status(200).json([response = { message: "Usuario válido"}, data = req.user])
}

// cerrar sesion
const logout = (req, res) => {    
    res.status(200).json({ message: "Sesión cerrada correctamente" })
}

module.exports = {register, login, access, logout}