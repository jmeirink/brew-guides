import { BrewGuide } from '../models/brewguide.js'

function index(req, res) {
  BrewGuide.find({})
  .then(brewguides => {
    res.render('brewguides/index', {
      brewguides,
      title: 'Brew Guides'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function newBrewGuide(req, res) {
  res.render('brewguides/new', {
    title: 'Add a Brew Guide'
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

function show(req, res) {
  BrewGuide.findById(req.params.id)
  .populate('owner')
  .populate('reviews.author')
  .then(brewguide => {
    res.render('brewguides/show', {
      brewguide,
      title: brewguide.name
    })
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
      title: 'Edit Brew Guide'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/brewguides')
  })
}

function update(req, res) {
  BrewGuide.findById(req.params.id)
  .then(brewguide => {
    if (brewguide.owner.equals(req.user.profile._id)) {
      brewguide.updateOne(req.body, {new: true})
      .then(updatedBrewguide => {
        res.redirect(`/brewguides/${brewguide._id}`)
      })
    } else {
      throw new Error ('User Not Authorized')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/brewguides')
  })
}

function deleteBrewguide(req, res) {
  BrewGuide.findById(req.params.id)
  .then(brewguide => {
    if (brewguide.owner.equals(req.user.profile._id)) {
      brewguide.delete()
      .then(() => {
        res.redirect('/brewguides')
      })
    } else {
      throw new Error ('User Not Authorized')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/brewguides')
  })
}

function review(req, res) {
  BrewGuide.findById(req.params.id)
  .populate('owner')
  .then(brewguide => {
    res.render('brewguides/review', {
      brewguide,
      title: 'Add a Review'
    })
  })
}

function createReview(req, res) {
  req.body.author = req.user.profile._id
  BrewGuide.findById(req.params.id)
  .then(brewguide => {
    brewguide.reviews.push(req.body)
    brewguide.save()
    .then(() => {
      res.redirect(`/brewguides/${brewguide._id}`)
    })
  })
}

function deleteReview(req, res) {
  BrewGuide.findById(req.params.id)
  .then(brewguide => {
    brewguide.reviews.remove({_id: req.params.reviewId})
    brewguide.save()
    .then(() => {
      res.redirect(`/brewguides/${req.params.id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/brewguides')
  })
}

export {
  index,
  newBrewGuide as new,
  create,
  show,
  edit,
  update,
  deleteBrewguide as delete,
  review,
  createReview,
  deleteReview
}