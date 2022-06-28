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

function show(req, res) {
  BrewGuide.findById(req.params.id)
  .populate('owner')
  .then(brewguide => {
    res.render('brewguides/show', {
      brewguide,
      title: 'show'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/brewguides')
  })
}

function create(req, res) {
  req.body.owner = req.user.profile._id
  BrewGuide.create(req.body)
  .then(brewguide => {
    res.redirect('/brewguides')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/brewguides')
  })
}

function edit(req, res) {
  BrewGuide.findById(req.params.id)
  .then(brewguide => {
    res.render('brewguides/edit', {
      brewguide,
      title: 'edit brewguide'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/brewguides')
  })
}

export {
  index,
  create,
  show,
  edit
}