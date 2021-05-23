const novelsGenres = (connection, Sequelize, Genres, Novels) => {
  return connection.define('novelsgenres', {
    genreId: { type: Sequelize.INTEGER, references: { model: Genres, key: 'id' } },
    novelId: { type: Sequelize.INTEGER, references: { model: Novels, key: 'id' } },
  }, { paranoid: true })
}

module.exports = novelsGenres
