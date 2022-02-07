'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('User', {
      name: Sequelize.DataTypes.STRING,
      email: Sequelize.DataTypes.STRING,
      password: Sequelize.DataTypes.STRING,
      },
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
