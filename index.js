const express = require('express')
const { getAllAuthors, getAuthorByLastNameOrId } = require('./controllers/authors')
const { getAllGenres, getGenreById } = require('./controllers/genres')
const { getAllNovels, getNovelByTitleOrId } = require('./controllers/novels')

const app = express()

app.get('/authors', getAllAuthors)

app.get('/authors/:nameOrId', getAuthorByLastNameOrId)

app.get('/genres', getAllGenres)

app.get('/genres/:id', getGenreById)

app.get('/novels', getAllNovels)

app.get('/novels/:titleOrId', getNovelByTitleOrId)

app.listen(1337, () => {
  console.log('Listening on port 1337...') // eslint-disable-line no-console
})
