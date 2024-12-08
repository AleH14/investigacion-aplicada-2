const jwt = require('jsonwebtoken')

let blockedTokens = []; // Lista para almacenar los tokens inválidos

const protect = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]

    if (!token) {
        return res.status(401).json({ message: "no autorizado" })
    }

    if (blockedTokens.includes(token)) {
        return res.status(403).json({ message: "Token inválido (cerrado sesión)" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next()
    } catch (error) {
        res.status(401).json({ message: "token invalido" })
    }
};

module.exports = { protect, blockedTokens }