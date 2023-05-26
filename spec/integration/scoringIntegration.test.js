const {BowlingGame, Frame} = require('../../lib/index');


let bowlingGame = new BowlingGame();

// resets bowling game to a new instance before each test
beforeEach(() => {
  bowlingGame = new BowlingGame();
});

describe('scoring integration', () => {
  it('scores a regular bowling game with no strikes or spares', () => {
    // 10 regular frames
    for (let i = 1; i <= 10; i++) {
      bowlingGame.addRollToFrame(2);
      bowlingGame.addRollToFrame(2);
      bowlingGame.checkFrameEnd();
    }
    expect(bowlingGame.getRunningScore()).toBe(40);
  });
});
