'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.addColumn(
      'alunos',   // nome da tabela
      'turma_id',   // nome do novo campo
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'turmas',   // Nome da tabela referenciada
          key: 'id'          // Chave primária da tabela referenciada
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.removeColumn(
      'alunos',   // nome da tabela
      'turma_id'
    )
  }
};
