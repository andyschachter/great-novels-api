const models = require('../models')

const getAllAuthors = async (request, response) => {
  try {
    const authors = await models.Authors.findAll()

    return response.send(authors)
  } catch (error) {
    return response.status(500).send('Unable to retrieve author list')
  }
}

const getAuthorByIdOrName = async (request, response) => {
  try {
    const { writer } = request.params

    const author = await models.Authors.findOne({
      where: {
        [models.Op.or]: [
          { id: writer },
          {
            nameLast: {
              [models.Op.like]: `%${writer}%`
            }
          }
        ]
      },
      include: [{
        model: models.Novels,
        include: [{ model: models.Genres }]
      }]
    })

    return author ? response.send(author) : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve author')
  }
}

module.exports = {
  getAllAuthors,
  getAuthorByIdOrName
}
