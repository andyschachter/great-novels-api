const models = require('../models')

const getAllNovels = async (request, response) => {
  try {
    const novels = await models.Novels.findAll({
      include: [{
        model: models.Authors
      },
      { model: models.Genres }]
    })

    return response.send(novels)
  } catch (error) {
    return response.status(500).send('Unable to retrieve novel list')
  }
}

const getNovelByTitleOrId = async (request, response) => {
  try {
    const { titleOrId } = request.params

    const novel = await models.Novels.findAll({
      where: {
        [models.Op.or]: [
          {
            title: {
              [models.Op.like]: `%${titleOrId}%`
            }
          },
          { id: titleOrId }
        ]
      },
      include: [{
        model: models.Authors
      },
      { model: models.Genres }]
    })

    return novel ? response.send(novel) : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve genre')
  }
}

module.exports = {
  getAllNovels,
  getNovelByTitleOrId
}
