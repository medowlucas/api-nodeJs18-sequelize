const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgres', // dialecto do banco de dados
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME, // nome do banco de dados
  username: process.env.DB_USER, // usuário do banco de dados
  password: process.env.DB_PASSWORD, // senha do banco de dados
});

module.exports = sequelize;
