const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  first_name: {
    type: String,
    required: false
  },
  last_name: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: [true, "Email is required."]
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Player = mongoose.model('player', PlayerSchema);
