'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const date = new Date()

    await queryInterface.bulkInsert('Cats', [{
      name: 'Snuffles',
      breed: 'Tabby',
      age: 5,
      createdAt: date,
      updatedAt: date
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cats', null, {})
  }
};
