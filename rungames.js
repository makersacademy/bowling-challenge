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

const gutterGame = [
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

const perfectGame = [
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
const scorecard2 = new Scorecard(gutterGame);
scorecard2.calculateScore();
console.log(scorecard2.score);

// Score for Perfect game:
const scorecard3 = new Scorecard(perfectGame);
scorecard3.calculateScore();
console.log(scorecard3.score);
