const express = require('express');
const app = express();

var bodyParser = require('body-parser');
 
const db = require('./app/config/db.config.js');
  
// Aqui lo que hace es validar si la tabla existe.
db.sequelize.sync({force: false}).then(() => {
  console.log('Drop and Resync with { force: false }');
}); 

//esto descomentarlo despues de crear la ruta para que se pueda leer
let router = require('./app/routers/usuarios.router.js');
let router2 = require('./app/routers/login.router.js');

const cors = require('cors')
const corsOptions = {
  origin: ['http://localhost:3000','http://localhost:4200','https://gestion-de-usuarios.onrender.com'],
  optionsSuccessStatus: 200
}
app.use(cors());

app.use(bodyParser.json());
//luego se descomenta la linea para usar la ruta
app.use('/', router,router2);
app.get("/",(req,res) => {
  
  res.json({mesage:"Bienvenido Estudiante Jonatan Ajanel Gonzalez al segundo examen de Desarrollo Web"});
})

// Creando el servidor para consumir la API
const server = app.listen(8080, function () {
 
    let host = server.address().address
    let port = server.address().port
   
    console.log("App listening at http://%s:%s", host, port); 
  })