const {DataTypes} =  require('sequelize')
const db = require('../config/db')

const model = db.define('Professor', {

    //id, nome, data_nascimento, cpf, formacao, valor_hora_aula, email

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
},{ tableName: 'professores'});

model.sync();

module.exports = model;