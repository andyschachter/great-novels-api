const express = require('express')
const { getAllAuthors, getAuthorById, getAuthorByLastName} = require('./controllers/authors')
const { getAllGenres, getGenreById } = require('./controllers/genres')
const { getAllNovels, getNovelById, getNovelByTitle } = require('./controllers/novels')

const app = express()

app.get('/authors', getAllAuthors)

app.get('/authors/:id', getAuthorById)

app.get('/authors/:nameLast', getAuthorByLastName)

app.get('/genres', getAllGenres)

app.get('/genres/:id', getGenreById)

app.get('/novels', getAllNovels)

app.get('/novels/:id', getNovelById)

app.get('/novels/:title', getNovelByTitle)

app.listen(1347, () => {
  console.log('Listening on port 1347...') // eslint-disable-line no-console
})
