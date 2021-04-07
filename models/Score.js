const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const teamSchema = mongoose.model('Team', TeamSchema);

const ScoreSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  score: {
    type: Number,
    team: [teamSchema],
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Score = mongoose.model('score', ScoreSchema);
