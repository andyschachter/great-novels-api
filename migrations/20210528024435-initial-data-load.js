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
      { title: 'The Strange Case of Dr. Jekyll and Mr. Hyde', authorId: 15 }
    ])

    await queryInterface.bulkInsert('genres', [
      { name: 'Adventure' },
      { name: 'African Literature' },
      { name: 'Crime' },
      { name: 'Drama' },
      { name: 'Dystopia' },
      { name: 'Fantasy' },
      { name: 'Fiction' },
      { name: 'French Literature' },
      { name: 'Gothic' },
      { name: 'Historical Fiction' },
      { name: 'Horror' },
      { name: 'Mystery' },
      { name: 'Plays' },
      { name: 'Russian Literature' },
      { name: 'Science Fiction' },
      { name: 'Time Travel' },
      { name: 'Thriller' },
      { name: 'War' }
    ])

    return queryInterface.bulkInsert('novelsgenres', [
      { genreId: 7, novelId: 1 },
      { genreId: 12, novelId: 1 },
      { genreId: 7, novelId: 2 },
      { genreId: 10, novelId: 2 },
      { genreId: 1, novelId: 2 },
      { genreId: 8, novelId: 2 },
      { genreId: 7, novelId: 3 },
      { genreId: 10, novelId: 3 },
      { genreId: 7, novelId: 4 },
      { genreId: 12, novelId: 4 },
      { genreId: 3, novelId: 4 },
      { genreId: 17, novelId: 4 },
      { genreId: 7, novelId: 5 },
      { genreId: 10, novelId: 5 },
      { genreId: 4, novelId: 5 },
      { genreId: 13, novelId: 5 },
      { genreId: 7, novelId: 6 },
      { genreId: 11, novelId: 6 },
      { genreId: 6, novelId: 6 },
      { genreId: 7, novelId: 7 },
      { genreId: 10, novelId: 7 },
      { genreId: 7, novelId: 8 },
      { genreId: 10, novelId: 8 },
      { genreId: 2, novelId: 8 },
      { genreId: 7, novelId: 9 },
      { genreId: 14, novelId: 9 },
      { genreId: 12, novelId: 9 },
      { genreId: 7, novelId: 10 },
      { genreId: 15, novelId: 10 },
      { genreId: 5, novelId: 10 },
      { genreId: 7, novelId: 11 },
      { genreId: 15, novelId: 11 },
      { genreId: 16, novelId: 11 },
      { genreId: 7, novelId: 12 },
      { genreId: 10, novelId: 12 },
      { genreId: 18, novelId: 12 },
      { genreId: 14, novelId: 12 },
      { genreId: 7, novelId: 13 },
      { genreId: 11, novelId: 13 },
      { genreId: 9, novelId: 13 },
      { genreId: 6, novelId: 13 },
      { genreId: 7, novelId: 14 },
      { genreId: 15, novelId: 14 },
      { genreId: 5, novelId: 14 },
      { genreId: 7, novelId: 15 },
      { genreId: 12, novelId: 15 },
      { genreId: 15, novelId: 15 },
      { genreId: 11, novelId: 15 }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('novelsgenres')

    await queryInterface.bulkDelete('genres')

    await queryInterface.bulkDelete('novels')

    return queryInterface.bulkDelete('authors')
  }
};
