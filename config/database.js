const Sequelize = require('sequelize');

const sequelize = new Sequelize('bdInventelier', 'root', 'M@Th0993', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    operatorsAliases: false
});
sequelize.sync({ force: true }).then(() => {
    console.log('Tabelas criadas com sucesso!');
});


module.exports = sequelize;
