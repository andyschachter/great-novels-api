'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('authors', [
      { nameFirst: 'Agatha', nameLast: 'Christie' },
      { nameFirst: 'Alexandre', nameLast: 'Dumas' },
      { nameFirst: 'Alice', nameLast: 'Walker' },
      { nameFirst: 'Arthur', nameLast: 'Conan Doyle' },
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

    await queryInterface.bulkInsert('novels', [
      { title: 'Murder on the Orient Express', authorId: 1 },
      { title: 'The Three Musketeers', authorId: 2 },
      { title: 'The Color Purple', authorId: 3 },
      { title: 'The Hound of the Baskervilles', authorId: 4 },
      { title: 'The Crucible', authorId: 5 },
      { title: 'Dracula', authorId: 6 },
      { title: 'A Tale of Two Cities', authorId: 7 },
      { title: 'Things Fall Apart', authorId: 8 },
      { title: 'Crime and Punishment', authorId: 9 },
      { title: 'Animal Farm', authorId: 10 },
      { title: 'The Time Machine', authorId: 11 },
      { title: 'War and Peace', authorId: 12 },
      { title: 'The Picture of Dorian Gray', authorId: 13 },
      { title: 'Fahrenheit 451', authorId: 14 },
      { title: 'The Strange Case of Dr. Jekyll and Mr. Hyde', authorId: 15 },
    ])
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
