const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const playerSchema = require('../models/player.js');

const TeamSchema = new Schema({
  players: {
    type: [ playerSchema ]
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

module.exports = Team = mongoose.model('team', TeamSchema);
