const db = require('../config/db.config.js');
const Login = db.Login;

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

        // Si las credenciales son correctas
        res.status(200).json({
            message: "Inicio de sesión exitoso",
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

exports.create = async (req, res) => {
    try {
        // Obtenemos los datos del cuerpo de la solicitud
        const { email, passwords } = req.body;

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
            passwords: passwords // Asegúrate de aplicar un hash para mayor seguridad en un entorno real
        });

        res.status(201).json({
            message: "Usuario creado exitosamente",
            usuario: {
                id: nuevoUsuario.id,
                email: nuevoUsuario.email
            }
        });
    } catch (error) {
        res.status(500).json({
            message: "Error -> No se pudo crear este usuario en la BD",
            error: error.message,
        });
    }
};

