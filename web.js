const express = require('express');
const BowlingGame = require('./bowling');

const app = express();
const port = 3000;
const game = new BowlingGame();

app.get('/game', (req, res) => {
  res.send(`Welcome to Bowling Game`);
});

app.post('/roll', (req, res) => {
  res.send(`Your score is ${game.roll(1)}`);
});

app.post('/score', (req, res) => {
  res.send(`Your score is ${game.score()}`);
});

console.log(`Server listening on local host: ${port}`);
app.listen(port);
