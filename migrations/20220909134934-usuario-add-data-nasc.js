'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'usuarios',   // nome da tabela,
      'data_nasc',  // nome do campo
      {
        type: Sequelize.DATE,
        allowNull: false
      }
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'usuarios',
      'data_nasc'
    )
  }
};
