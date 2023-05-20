const Mongoose = require('mongoose')
const { Schema } = Mongoose
const validator = require('validator')
const WorkoutLog = require("../models/log")

// User Schema
const UserSchema = new Schema({
  username: {type: String, required: true },
  email: { type: String, required: true, validate: { validator: validator.isEmail, message: 'Invalid email' } },
  role: { type: Number, min: 0, max: 1, required: true },
  pass: { type: String, required: true },
  join_date: { type: Date, required: true },
  workout_log: [ WorkoutLog.schema ],
  streak: { type: Number, required: true },
  recent_streak_date: { type: Date, required: true },
  token: { type: String }
})

module.exports = Mongoose.model('User', UserSchema)