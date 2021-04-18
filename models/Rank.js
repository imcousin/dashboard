const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RankSchema = new Schema({
  rankings: [
    { rank: {
        rank: Number,
        player: String,
        points: Number
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Rank = mongoose.model('rank', RankSchema);
