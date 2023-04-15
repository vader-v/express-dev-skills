import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const monSchema = new Schema({
  name: String,
  starter: Boolean,
  type: String,
})

//Compile schema into model and export it
const Mon = mongoose.model('Mon', monSchema)

export {
  Mon
}