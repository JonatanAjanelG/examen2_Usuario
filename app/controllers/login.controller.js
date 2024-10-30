const db = require('../config/db.config.js');
const jwt = require('jsonwebtoken'); // Importa jsonwebtoken
const Login = db.Login;

const SECRET_KEY = 'tu_clave_secreta_jwt'; // Define una clave secreta segura para firmar el token JWT

// Función de inicio de sesión
exports.login = async (req, res) => {
    const { email, passwords } = req.body;

    try {
        // Busca el usuario en la base de datos
        const usuario = await Login.findOne({
            where: { email: email }
        });

        // Si el usuario no existe o la contraseña no coincide
        if (!usuario || usuario.passwords !== passwords) {
            return res.status(401).json({
                message: "Error -> Credenciales incorrectas",
            });
        }

        // Genera un token JWT
        const token = jwt.sign(
            { id: usuario.id, email: usuario.email },
            SECRET_KEY,
            { expiresIn: '1h' } // Define la expiración del token
        );

        // Respuesta de inicio de sesión exitoso con el token
        res.status(200).json({
            message: "Inicio de sesión exitoso",
            token: token, // Enviar el token en la respuesta
            usuario: {
                id: usuario.id,
                email: usuario.email,
            }
        });
    } catch (error) {
        res.status(500).json({
            message: "Error -> No se pudo iniciar sesión",
            error: error.message,
        });
    }
};

// Función de registro de nuevo usuario
exports.create = async (req, res) => {
    const { email, passwords } = req.body;

    try {
        // Verificamos si el email ya existe en la base de datos
        const usuarioExistente = await Login.findOne({
            where: { email: email }
        });

        if (usuarioExistente) {
            return res.status(400).json({
                message: "Error -> El correo electrónico ya está en uso",
            });
        }

        // Creamos el nuevo usuario en la base de datos
        const nuevoUsuario = await Login.create({
            email: email,
            passwords: passwords
        });

        // Genera un token JWT para el nuevo usuario
        const token = jwt.sign(
            { id: nuevoUsuario.id, email: nuevoUsuario.email },
            SECRET_KEY,
            { expiresIn: '1h' }
        );

        res.status(201).json({
            message: "Usuario creado exitosamente",
            token: token, // Enviar el token en la respuesta
            usuario: {
                id: nuevoUsuario.id,
                email: nuevoUsuario.email
            }
        });
    } catch (error) {
        res.status(500).json({
            message: "Error -> No se pudo crear el usuario en la BD revise",
            error: error.message,
        });
    }
};
