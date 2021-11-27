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
scorecard.calculateScore();
console.log(scorecard.score);

// Score for Gutter game:
const scorecard2 = new Scorecard(gameGutter);
scorecard2.calculateScore();
console.log(scorecard2.score);

// Score for Perfect game:
const scorecard3 = new Scorecard(gamePerfect);
scorecard3.calculateScore();
console.log(scorecard3.score);
