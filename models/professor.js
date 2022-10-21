'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Professor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Turma, {
        foreignKey: 'professor_id',
        sourceKey: 'id',
        as: 'turmas'
      })
    }
  }
  Professor.init({
    // Model attributes are defined here
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    data_nascimento: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    cpf: {
        type: DataTypes.CHAR(14),
        allowNull: false,
        unique: true
    },
    formacao:{
        type: DataTypes.STRING(200),
        allowNull: false
    },
    valor_hora_aula:{
        type: DataTypes.DECIMAL(18,2),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    }
  }, {
    sequelize,
    modelName: 'Professor',
    tableName: 'professores'
  });
  return Professor;
};