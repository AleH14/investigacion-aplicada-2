const jwt = require('jsonwebtoken')

const protect = (req, res, next) => {
    // extrae el token de los headers
    const token = req.headers.authorization?.split(" ")[1]

    // si no existe no esta autorizado
    if (!token) {
        return res.status(401).json({ message: "no autorizado" })
    }

    // comprobar si el token es valido
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next()
    } catch (error) {
        res.status(401).json({ message: "token invalido" })
    }
};

module.exports = protect