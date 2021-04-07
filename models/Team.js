const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const playerSchema = mongoose.model('Player', PlayerSchema);

const TeamSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  players: [playerSchema],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Team = mongoose.model('team', TeamSchema);
