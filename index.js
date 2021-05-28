const express = require('express')
const { getAllAuthors, getAuthorByIdOrName } = require('./controllers/authors')
const { getAllGenres, getGenreById } = require('./controllers/genres')
const { getAllNovels, getNovelById, getNovelByTitle } = require('./controllers/novels')

const app = express()

app.get('/authors', getAllAuthors)

app.get('/authors/:writer', getAuthorByIdOrName)

app.get('/genres', getAllGenres)

app.get('/genres/:id', getGenreById)

app.get('/novels', getAllNovels)

app.get('/novels/:title', getNovelByTitle)

app.get('/novels/:id', getNovelById)

app.listen(1347, () => {
  console.log('Listening on port 1347...') // eslint-disable-line no-console
})
