const {BowlingGame, Frame} = require('../../lib/index');


let bowlingGame = new BowlingGame();
let frame = new Frame();
// resets bowling game to a new instance before each test
beforeEach(() => {
  frame = new Frame();
  bowlingGame = new BowlingGame();
});

describe('scoring integration', () => {
  it('scores a regular bowling game with no strikes or spares', () => {
    // 10 regular frames
    for (let i = 1; i <= 10; i++) {
      bowlingGame.rollResult(2);
      bowlingGame.rollResult(2);
      bowlingGame.checkFrameEnd();
    }

    expect(bowlingGame.getScore).toBe(40);
  });
});
