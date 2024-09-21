const db = require('../config/db.config.js');
const Usuario = db.Usuarios;

exports.create = (req, res) => {
    let usuario = {};
    try {
        usuario.nombre = req.body.nombre;
        usuario.apellido = req.body.apellido;
        usuario.email = req.body.email;
        usuario.telefono = req.body.telefono;
        usuario.direccion = req.body.direccion;
        usuario.fechaingeso = req.body.fechaingeso;
        usuario.estado = req.body.estado;

        // Create the new user in the database
        Usuario.create(usuario).then(result => {
            res.status(200).json({
                message: "Usuario guardado con éxito, ID: " + result.id,
                usuario: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "Error -> No se pudo crear este usuario en la BD",
            error: error.message,
        });
    }
};

exports.retrieveAllUsuarios = (req, res) => {
    Usuario.findAll().then(usuariosInfos => {
        res.status(200).json({
            message: "Listado de Usuarios:",
            usuarios: usuariosInfos,
        });
    }).catch(err => {
        res.status(500).json({
            message: "Error -> " + err.message,
        });
    });
};

exports.getUsuarioById = (req, res) => {
    Usuario.findByPk(req.params.id).then(usuarioInfo => {
        if (!usuarioInfo) {
            return res.status(404).json({
                message: "No se encontró el usuario con el ID: " + req.params.id,
            });
        }

        res.status(200).json({
            message: "El usuario con el ID: " + req.params.id + " es:",
            usuario: usuarioInfo,
        });
    }).catch(err => {
        res.status(500).json({
            message: "Error -> " + err.message,
        });
    });
};

exports.updateUsuarioById = async (req, res) => {
    try {
        let usuarioId = req.params.id;
        let usuario = await Usuario.findByPk(usuarioId);

        if (!usuario) {
            res.status(404).json({
                message: "No se encontró ningún usuario con el ID = " + usuarioId,
                error: "404",
            });
        } else {
            let updatedObject = {
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                telefono: req.body.telefono,
                direccion: req.body.direccion,
                fechaingeso: req.body.fechaingeso,
                estado: req.body.estado,
            };

            let result = await Usuario.update(updatedObject, { returning: true, where: { id: usuarioId } });

            if (!result) {
                res.status(500).json({
                    message: "Error al actualizar los datos del Usuario con el ID = " + req.params.id,
                    error: "No se pudo actualizar",
                });
            }

            res.status(200).json({
                message: "Usuario actualizado correctamente con el ID = " + usuarioId,
                usuario: updatedObject,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error -> Error de Usuario con el ID = " + req.params.id,
            error: error.message,
        });
    }
};

exports.deleteUsuarioById = (req, res) => {
    Usuario.destroy({
        where: {
            id: req.params.id,
        },
    }).then(num => {
        if (num == 1) {
            res.status(200).json({
                message: "El usuario con el ID: " + req.params.id + " ha sido eliminado correctamente",
            });
        } else {
            res.status(404).json({
                message: "No se encontró el usuario con el ID: " + req.params.id,
            });
        }
    }).catch(err => {
        res.status(500).json({
            message: "Error -> " + err.message,
        });
    });
};
