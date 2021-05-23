const express = require('express')
const { getAllAuthors, getAuthorById } = require('./controllers/authors')
const { getAllGenres, getGenreById } = require('./controllers/genres')

const app = express()

app.get('/authors', getAllAuthors)

app.get('/authors/:id', getAuthorById)

app.get('/genres', getAllGenres)

app.get('/genres/:id', getGenreById)

app.listen(1347, () => {
  console.log('Listening on port 1347...') // eslint-disable-line no-console
})
