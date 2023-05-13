const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Cte = sequelize.define('cte', {
    seq_cte: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      field: 'seq_cte', // nome da coluna no banco de dados
    },
  }, {
    tableName: 'cte', // nome da tabela no banco de dados
    timestamps: false, // desabilita as colunas de data de criação e atualização
  });

module.exports = Cte;
