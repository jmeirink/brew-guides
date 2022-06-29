import mongoose from 'mongoose'

const Schema = mongoose.Schema

const reviewSchema = new Schema({
  rating: {type: Number, min: 1, max: 5, default: 5},
  content: String
}, {
  timestamps: true
})

const brewGuideSchema = new Schema({
  name: String,
  brewdevice: {
    type: String,
    enum: ['V60', 'Chemex', 'Kalita', 'Aeropress']
  },
  grindsize: {
    type: String,
    enum: ['Course', 'Medium', 'Fine', 'Extra Fine']
  },
  gramsofcoffee: Number, // add Grams to the number and change the name back to groundcoffee
  watertemp: Number, // add Farenheit to the number
  brewtime: Number, // convert to a time value,
  reviews: [reviewSchema],
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}
}, {
  timestamps: true
})

const BrewGuide = mongoose.model('BrewGuide', brewGuideSchema)

export {
  BrewGuide
}
