import { BrewGuide } from '../models/brewguide.js'

function index(req, res) {
  BrewGuide.find({})
  .then(brewguides => {
    res.render('brewguides/index', {
      brewguides,
      title: 'Brewguide'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

export {
  index
}