const { BowlingGame } = require('../lib/index')

let bowlingGame = new BowlingGame();

// this creates new instances before each test
beforeEach(() => {
  bowlingGame = new BowlingGame();
});

describe('BowlingGame class', () => {
  it('constructs', () => {
    expect(bowlingGame).toBeTruthy();
  })
});