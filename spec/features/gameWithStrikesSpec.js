var BowlingGame = require('../../src/BowlingGame.js')

describe('BowlingGameWithStrikes', function() {
  
  var bowlingGame = new BowlingGame();
  
  var rolls = function(score, numOfRolls) {
    for (i = 0; i < numOfRolls; i++) {
      bowlingGame.roll(score)
    };
  };

  it('Game with one strike has score ', function() {
    rolls(3, 10)
    bowlingGame.roll(10)
    rolls(3, 8)
    expect(bowlingGame.frame).toEqual(10)
    expect(bowlingGame.score).toEqual(70)
    expect(bowlingGame.isInPlay).toEqual(false)
  });
});
