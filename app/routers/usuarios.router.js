let express = require('express');
let router = express.Router();

const Usuario = require('../controllers/usuarios.controller.js');

// Routes for Usuario operations
router.post('/api/usuario', Usuario.create); // Create a new user
router.get('/api/usuarios', Usuario.retrieveAllUsuarios); // Get all users
router.get('/api/usuario/:id', Usuario.getUsuarioById); // Get a user by ID
router.delete('/api/usuarioD/:id', Usuario.deleteUsuarioById); // Delete a user by ID
router.put('/api/usuarioA/:id', Usuario.updateUsuarioById); // Update a user by ID

module.exports = router;
