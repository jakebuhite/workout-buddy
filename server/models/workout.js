const Mongoose = require('mongoose');
const { Schema } = Mongoose;

// Workout Schema
const WorkoutSchema = new Schema({
  id: { type: 'ObjectId' },
  workout_name: { type: String, required: true },
  workout_difficulty: { type: String, enum: ['EASY', 'MEDIUM', 'HARD'], required: true },
  exercises: [ { type: 'ObjectId' } ]
});

module.exports = Mongoose.model('Workout', WorkoutSchema);