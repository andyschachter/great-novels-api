const models = require('../models')

const getAllAuthors = async (request, response) => {
  try {
    const authors = await models.Authors.findAll()

    return response.send(authors)
  } catch (error) {
    return response.status(500).send('Unable to retrieve author list')
  }
}

module.exports = {
  getAllAuthors
}
