const path = require('path')
const mongoose = require('mongoose')

const envPath = path.join(__dirname, '..', '..', '/.env')
require('dotenv').config({path: envPath});
const uri = process.env.MONGO_URI;

async function loadDB() {
  try {
    // Connect to MongoDB
    mongoose
      .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      .then(() =>
        console.log('MongoDB Connected!')
      )
      .catch(err => console.log(err));
  } catch (error) {
    console.error(error)
  }
};

module.exports.loadDB = loadDB;
