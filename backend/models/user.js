const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  name: { type: String, required: true }, // New field for user's full name
  username: { type: String, required: true, unique: true } // New field for user's username
});

module.exports = mongoose.model('User', userSchema);