const jwt = require('jsonwebtoken');
const SECRET_KEY = 'tu_clave_secreta_jwt'; // Usa la misma clave secreta que usaste para firmar el token

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({
            message: "Error -> No se proporcionó un token"
        });
    }

    jwt.verify(token, SECRET_KEY, (error, decoded) => {
        if (error) {
            return res.status(401).json({
                message: "Error -> Token no válido",
                error: error.message
            });
        }
        req.userId = decoded.id;
        next();
    });
};

module.exports = verifyToken;
