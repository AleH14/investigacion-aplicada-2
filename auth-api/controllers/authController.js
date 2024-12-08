const User = require('../model/userModel.js')
const jwt = require('jsonwebtoken')
const { blockedTokens } = require('../middleware/authMiddleware.js')

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

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// acceder a un recurso (algo de productos por ejemplo)
const access = (req, res) => {
    res.status(200).json({ message: "Usuario válido", data: req.user })
}

// cerrar sesión
const logout = (req, res) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader.split(' ')[1];

    blockedTokens.push(token);
    return res.status(200).send({ message: "Cierre de sesión exitoso" });
}

module.exports = { register, login, access, logout }