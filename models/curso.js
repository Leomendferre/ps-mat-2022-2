const { DataTypes } = require('sequelize');
const db = require('../config/db');

const model = db.define('Curso', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  sigla: {
    type: DataTypes.CHAR(5),
    unique: true
  },
  descricao: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  duracao_meses: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 6
  },
  carga_horaria: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 80
  },
  valor_total: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: false
  }
}, {
    tableName: 'cursos'
});

// Cria a tabela no banco de dados, caso ainda não exista
model.sync()

module.exports = model