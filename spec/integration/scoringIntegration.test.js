const { BowlingGame } = require('../../lib/index')


let bowlingGame = new BowlingGame();

// this creates new instances before each test
beforeEach(() => {
  bowlingGame = new BowlingGame();
});


describe('scoring integration', () => {
  it.skip('scores a regular bowling game with no strikes or spares', () => {
    // 10 regular frames
    for (let i = 1 ; i <= 10 ; i++) {
      bowlingGame.rollResult(2)
      bowlingGame.rollResult(2)
      bowlingGame.checkFrameEnd()
    }

    expect(bowlingGame.getScore).toBe(40)
  });
});

