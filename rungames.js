const Scorecard = require('./scorecard');

const game = [
  [1, 4],
  [4, 5],
  [6, 4],
  [5, 5],
  [10],
  [0, 1],
  [7, 3],
  [6, 4],
  [10],
  [2, 8, 6]
];

const gameGutter = [
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
];

const gamePerfect = [
  [10],
  [10],
  [10],
  [10],
  [10],
  [10],
  [10],
  [10],
  [10],
  [10, 10, 10]
];

// Score for game with strikes and spares:
const scorecard = new Scorecard(game);
console.log(scorecard.calculateScore());

// Score for Gutter game:
const scorecard2 = new Scorecard(gameGutter);
console.log(scorecard2.calculateScore());

// Score for Perfect game:
const scorecard3 = new Scorecard(gamePerfect);
console.log(scorecard3.calculateScore());
