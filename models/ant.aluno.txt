const { DataTypes } = require('sequelize');
const db = require('../config/db');

const model = db.define('Aluno', {
    // Model attributes are defined here
    id: {
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
    doc_identidade: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    cpf: {
        type: DataTypes.CHAR(14),
        allowNull: false
    },
    logradouro: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    num_imovel: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    complemento: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    bairro: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    municipio: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    uf: {
        type: DataTypes.CHAR(2),
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    turma: {
        type: DataTypes.CHAR(5),
        allowNull: false
    }

}, {
    tableName: 'alunos'
});

// Cria a tabela no banco de dados, caso ainda não exista
model.sync()

module.exports = model

