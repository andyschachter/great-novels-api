const models = require('../models')

const getAllAuthors = async (request, response) => {
  try {
    const authors = await models.Authors.findAll()

    return response.send(authors)
  } catch (error) {
    return response.status(500).send('Unable to retrieve author list')
  }
}

const getAuthorByLastNameOrId = async (request, response) => {
  try {
    const { nameOrId } = request.params

    const author = await models.Authors.findAll({
      where: {
        [models.Op.or]: [
          {
            nameLast: {
              [models.Op.like]: `%${nameOrId}%`
            }
          },
          { id: nameOrId }
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
  getAuthorByLastNameOrId
}
