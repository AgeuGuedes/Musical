const { Sequelize } = require('sequelize'); 

module.exports = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '123',
    database: 'catalogo',
    define: {
        timestamps: true,
        underscored: true
    }
});
