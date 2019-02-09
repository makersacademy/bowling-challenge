let BowlingGame = require('../../src/BowlingGame.js')

describe('BowlingGutterGame', function() {
  
  let bowlinggame = new BowlingGame();

  it('Gutter Game has score 0 and finishes in the 10th frame', function() {
    for (i = 0; i <= 20; i++) {
      bowlinggame.roll(0);
    }
    expect(bowlinggame.score).toEqual(0)
    expect(bowlinggame.frame).toEqual(10)
  });
});

