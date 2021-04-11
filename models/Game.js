const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const scoreSchema = mongoose.model('Score', ScoreSchema);

var validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};

const GameSchema = new Schema({
  player: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: 'Email address is required',
    validate: [validateEmail, 'Please fill a valid email address'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  score: {
    type: Number,
    required: 'Score is required',
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Game = mongoose.model('game', GameSchema);
