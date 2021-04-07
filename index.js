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
const Item = require('./models/Item');
const Player = require('./models/Player');

// ROUTES
app.get('/', async (req, res) => {
  // assign page variables
  try {
    let items = await Item.find();
    let players = await Player.find();
    res.render('index', { items, players });
  } catch (error) {
    console.log(error);
  }
  // Item.find()
  //   .then(items => res.render('index', { items }))
  //   .catch(err => res.status(404).json({ msg: 'No items found' }));
    
  // Player.find()
  //   .then(players => res.render('index', { players }))
  //   .catch(err => res.status(404).json({ msg: 'No players found' }));
});

// ROUTES
app.get('/players', (req, res) => {    
  Player.find()
    .then(players => res.render('index', { players }))
    .catch(err => res.status(404).json({ msg: 'No players found' }));
});

app.post('/item/add', (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save().then(item => res.redirect('/'));
});

app.post('/player/add', (req, res) => {
  const newPlayer = new Player({
    name: req.body.name,
    email: req.body.email
  });

  newPlayer.save().then(player => res.redirect('/'));
});

const port = 3000;

app.listen(port, () => console.log('Server running...'));

// PAGE TITLE
module.exports = pageTitleIndex = 'Modest Grass Leaderboard'