const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const scoreSchema = mongoose.model('Score', ScoreSchema);

const GameSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  scores: [scoreSchema],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Game = mongoose.model('game', GameSchema);
