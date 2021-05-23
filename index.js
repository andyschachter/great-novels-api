const express = require('express')
const { getAllAuthors } = require('./controllers/authors')

const app = express()

app.get('/authors', getAllAuthors)

app.listen(1347, () => {
  console.log('Listening on port 1347...') // eslint-disable-line no-console
})
