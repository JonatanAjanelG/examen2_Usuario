let express = require('express');
let router = express.Router();

const Usuario = require('../controllers/usuarios.controller.js');

// Routes for Usuario operations
router.post('/api/usuario', Usuario.create); 
router.get('/api/usuarios', Usuario.retrieveAllUsuarios);
router.get('/api/usuario/:id', Usuario.getUsuarioById); 
router.delete('/api/usuarioD/:id', Usuario.deleteUsuarioById); 
router.put('/api/usuarioA/:id', Usuario.updateUsuarioById); 

module.exports = router;
