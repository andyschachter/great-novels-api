'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('authors', [
      { nameFirst: 'Agatha', nameLast: 'Christie' },
      { nameFirst: 'Alexandre', nameLast: 'Dumas' },
      { nameFirst: 'Alice', nameLast: 'Walker' },
      { nameFirst: 'Arthur', nameLast: 'Miller' },
      { nameFirst: 'Bram', nameLast: 'Stoker' },
      { nameFirst: 'Charles', nameLast: 'Dickens' },
      { nameFirst: 'Chinua', nameLast: 'Achebe' },
      { nameFirst: 'Fyodor', nameLast: 'Dostoyevsky' },
      { nameFirst: 'George', nameLast: 'Orwell' },
      { nameFirst: 'H.G.', nameLast: 'Wells' },
      { nameFirst: 'Leo', nameLast: 'Tolstoy' },
      { nameFirst: 'Oscar', nameLast: 'Wilde' },
      { nameFirst: 'Ray', nameLast: 'Bradbury' },
      { nameFirst: 'Robert', nameLast: 'Louis Stevenson' }
    ])

    await queryInterface.bulkInsert('novels',)
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
