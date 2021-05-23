const models = require('../models')

const getAllGenres = async (request, response) => {
  try {
    const genres = await models.Genres.findAll()

    return response.send(genres)
  } catch (error) {
    return response.status(500).send('Unable to retrieve genre list')
  }
}

module.exports = {
  getAllGenres
}
