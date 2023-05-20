const Mongoose = require('mongoose');
const { Schema } = Mongoose;

// User Schema
const UserSchema = new Schema({
  email: {
    type: String,
    required: () => {
      return this.provider !== 'email' ? false : true;
    }
  }
});

module.exports = Mongoose.model('User', UserSchema);