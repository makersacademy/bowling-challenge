let BowlingGame = require('../../src/BowlingGame.js')

describe('BowlingGutterGame', function() {
  
  let bowlingGame = new BowlingGame();

  it('Gutter Game has score 0 and finishes in the 10th frame', function() {
    for (i = 0; i <= 20; i++) {
      bowlingGame.roll(0);
    }
    expect(bowlingGame.score).toEqual(0)
    expect(bowlingGame.frame).toEqual(10)
  });
});

