module.exports = (sequelize, Sequelize) => {
    const Login = sequelize.define('login_usu', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        passwords: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    return Login;
};
