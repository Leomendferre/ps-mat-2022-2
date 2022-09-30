'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Turma extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Turma.init({
    id: DataTypes.INTEGER,
    curso_id: DataTypes.INTEGER,
    professor_id: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    dia_semana: DataTypes.TINYINT,
    horario_ini: DataTypes.TIME,
    horario_fim: DataTypes.TIME,
    data_ini: DataTypes.DATEONLY,
    data_fim: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Turma',
  });
  return Turma;
};