const express = require('express');
const BowlingGame = require('./bowling');

const app = express();
const port = 3000;
const game = new BowlingGame();

console.log(`Server listening on local host: ${port}`);
app.listen(port);
