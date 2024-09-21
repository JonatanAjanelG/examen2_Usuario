module.exports = (sequelize,Sequelize) => {

    const Usuarios = sequelize.define('usuario', {

        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre:{
            type: Sequelize.STRING
        },
        apellido:{
            type: Sequelize.STRING
        },
        email:{
            type: Sequelize.STRING
        },
        telefono:{
            type: Sequelize.STRING
        },
        direccion:{
            type: Sequelize.STRING
        },
        fechaingeso:{
            type: Sequelize.DATEONLY
        },
        estado:{
            type: Sequelize.STRING
        }
        
    });
    
    return Usuarios;
}