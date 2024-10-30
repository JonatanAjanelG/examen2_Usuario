let express = require('express');
let router = express.Router();

const Usuario = require('../controllers/usuarios.controller.js');
const verifyToken = require('../middlewares/auth.middleware.js'); // Importa el middleware de autenticación

// Routes for Usuario operations, protected with verifyToken middleware
router.post('/api/usuario', verifyToken, Usuario.create); 
router.get('/api/usuarios', verifyToken, Usuario.retrieveAllUsuarios);
router.get('/api/usuario/:id', verifyToken, Usuario.getUsuarioById);
router.delete('/api/usuarioD/:id', verifyToken, Usuario.deleteUsuarioById);
router.put('/api/usuarioA/:id', verifyToken, Usuario.updateUsuarioById);

module.exports = router;
