const Mongoose = require('mongoose')
const { Schema } = Mongoose

// Exercise Schema
const ExerciseSchema = new Schema({
  exercise_name: { type: String, required: true},
  exercise_image: { type: String, required: true },
  exercise_description: { type: String, required: false},
  body_parts: { type: [String], required: true },
})

module.exports = Mongoose.model('Exercise', ExerciseSchema)