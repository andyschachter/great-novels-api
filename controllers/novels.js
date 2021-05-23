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

module.exports = {
  getAllNovels
}
