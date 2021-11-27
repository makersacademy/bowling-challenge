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

describe('Scorecard class', () => {
  it('initializes an instance of a scorecard with a game attribute and score attribute of 0', () => {
    const scorecard = new Scorecard(game);
    expect(scorecard.game).toEqual(game);
  });
  
});
