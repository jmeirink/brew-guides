import mongoose from 'mongoose'

const Schema = mongoose.Schema

const brewGuideSchema = new Schema({
  name: String,
  brewdevice: {
    type: String,
    enum: ['V60', 'Chemex', 'Kalita', 'Aeropress']
  },
  grindSize: {
    type: String,
    enum: ['Course', 'Medium', 'Fine', 'Extra Fine']
  },
  groundCoffee: Number, // add Grams to the number
  waterTemp: Number, // add Farenheit to the number
  brewTime: Number, // convert to a time value
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}
}, {
  timestamps: true
})

const BrewGuide = mongoose.model('BrewGuide', brewGuideSchema)

export {
  BrewGuide
}
