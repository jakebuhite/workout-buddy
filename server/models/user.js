const Mongoose = require('mongoose');
const { Schema } = Mongoose;
const validator = require('validator');

// Log Schema (component of User Schema)
const WorkoutLog = new Schema({
  workout_date: { type: Date, required: true},
  minutes: { type: Number, required: true } 
})

// User Schema
const UserSchema = new Schema({
  id: { type: 'ObjectId' },
  username: {type: String, required: true },
  email: { type: String, required: true, validate: [validator.isEmail, 'Invalid email'] },
  role: { type: Number, min: 0, max: 1, required: true },
  pass: { type: String, required: true },
  join_date: { type: Date, required: true },
  last_seen: { type: Date, required: true },
  workout_log: [ WorkoutLog ],
  streak: { type: Number, required: true }
});

module.exports = Mongoose.model('User', UserSchema);