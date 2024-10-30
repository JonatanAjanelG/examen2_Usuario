let express = require('express');
let router = express.Router();

const Login = require('../controllers/login.controller.js');

// Routes for Usuario operations
router.post('/api/iniciosesion', Login.login); 
router.post('/api/crear', Login.create);
 
module.exports = router;
