const Sequelize = require('sequelize')
const AuthorsModel = require('./Authors')
const NovelsModel = require('./Novels')
const GenresModel = require('./Genres')
const NovelsGenresModel = require('./NovelsGenres')

const connection = new Sequelize('bookLibrary', 'librarian', 'password123!', {
  host: 'localhost', dialect: 'mysql'
})

const Authors = AuthorsModel(connection, Sequelize)
const Novels = NovelsModel(connection, Sequelize)
const Genres = GenresModel(connection, Sequelize)
const NovelsGenres = NovelsGenresModel(connection, Sequelize)

Novels.belongsTo(Authors)
Authors.hasMany(Novels)

Genres.belongstoMany(Novels, { through: NovelsGenres })
Novels.belongstoMany(Genres, { through: NovelsGenres })

module.exports = {
  Authors,
  Novels,
  Genres,
  NovelsGenres
}
