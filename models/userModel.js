const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true  
  },
  direction: {
    country: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    }
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;