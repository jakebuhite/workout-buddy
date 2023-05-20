const Mongoose = require('mongoose')
const { Schema } = Mongoose

// Report Schema
const ReportSchema = new Schema({
  report_date: { type: Date, required: true},
  message: { type: String, required: true },
  status: { type: String, enum: ['OPEN', 'CLOSED'], required: true },
})

module.exports = Mongoose.model('Report', ReportSchema)