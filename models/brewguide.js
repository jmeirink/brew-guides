import mongoose from 'mongoose'

const Schema = mongoose.Schema

const reviewSchema = new Schema({
  rating: {type: Number, min: 1, max: 5, default: 5},
  content: String,
  author: {type: Schema.Types.ObjectId, ref: "Profile"}
}, {
  timestamps: true
})

const brewGuideSchema = new Schema({
  name: String,
  brewdevice: {
    type: String,
    enum: ['V60', 'Chemex', 'Kalita', 'French Press', 'Aeropress', 'MokaPot']
  },
  grindsize: {
    type: String,
    enum: ['Course', 'Medium Course', 'Medium', 'Fine', 'Extra Fine']
  },
  gramsofcoffee: String,
  totalwater: String,
  watertemp: String,
  brewtime: String,
  reviews: [reviewSchema],
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}
}, {
  timestamps: true
})

const BrewGuide = mongoose.model('BrewGuide', brewGuideSchema)

export {
  BrewGuide
}