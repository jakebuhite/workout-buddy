const Mongoose = require('mongoose')
const { Schema } = Mongoose

// Log Schema (component of User Schema)
const WorkoutLog = new Schema({
    workout_date: { type: Date, required: true},
    minutes: { type: Number, required: true } 
})

module.exports = Mongoose.model('WorkoutLog', WorkoutLog)


