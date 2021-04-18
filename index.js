const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose
  .connect(
    'mongodb://mongo:27017/docker-node-mongo',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


// DEFINED OBJECT
// const Item = require('./models/Item');
// const Player = require('./models/Player');
const Game = require('./models/Game');
const Rank = require('./models/Rank');
// const Team = require('./models/Team');


// var g = new Game({
//   teams: [
//     {players: ['a@a.com','b@b.com'],score: 21},
//     {players: ['c@c.com'],score: 10}
//   ]});

var r = new Rank({
  rankings: [
    { rank: 1,
      player: 'Al Liao', 
      points: 2552 },
    { rank: 2,
      player: 'Caleb Chan', 
      points: 2233 }
  ]
});


// ROUTES
app.get('/', async (req, res) => {
  // assign page variables
  try {
    // PAGE TITLE
    module.exports = pageTitleIndex = 'Modest Grass Leaderboard';

    // let items = await Item.find();
    // let players = await Player.find();
    let games = await Game.find();
    let ranks = await Rank.find();
    // let teams = await Team.find();
    // let scores = await Score.find();
  
    res.render('index', { games, ranks });
  } catch (error) {
    console.log(error);
  }
  // Player.find()
  //   .then(players => res.render('index', { players }))
  //   .catch(err => res.status(404).json({ msg: 'No players found' }));
});

// ROUTES
// app.get('/games', (req, res) => {    
//   Game.find()
//     .then(games => res.render('index', { games }))
//     .catch(err => res.status(404).json({ msg: 'No games found' }));
// });

app.get('/player', (req, res) => {   
  // PAGE TITLE
  module.exports = pageTitleIndex = 'Player Stats';

  res.render('player');
  // Player.find()
  //   .then(players => res.render('index', { players }))
  //   .catch(err => res.status(404).json({ msg: 'No players found' }));
});


// Create
app.post('/game/add', (req, res) => {
  console.log(`game add: `, req.body);
  // let team1 = [{ email: req.body.email1 }];
  // let team2 = [{ email: req.body.email3 }];
  // if (req.body.email2 != '') {
  //   team1.push({ email: req.body.email2 })
  // }
  // if (req.body.email4 != '') {
  //   team1.push({ email: req.body.email4 })
  // }
  // const newGame = new Game({
  //   teams: [
  //     { players: team1, 
  //       score: req.body.score1 },
  //     { players: team2, 
  //       score: req.body.score2 }
  //   ]
  // });

  // newGame.save().then(game => res.redirect('/'));

  const newRank = new Rank({
    rankings: [
      { rank: 1,
        player: 'Al Liao', 
        points: 2552 },
      { rank: 2,
        player: 'Caleb Chan', 
        points: 2233 }
    ]
  });
  newRank.save().then(ranks => res.redirect('/'));
});

const port = 3000;

app.listen(port, () => console.log('Server running...'));