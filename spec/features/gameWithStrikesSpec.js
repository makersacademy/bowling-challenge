var BowlingGame = require('../../src/BowlingGame.js')

describe('BowlingGameWithStrikes', function() {
  
  var bowlingGame = new BowlingGame();
  
  var rolls = function(score, numOfRolls) {
    for (i = 0; i < numOfRolls; i++) {
      bowlingGame.roll(score)
    };
  };

  it('Game with one strike has score 70', function() {
    rolls(3, 10)
    bowlingGame.roll(10)
    rolls(3, 8)
    expect(bowlingGame.score).toEqual(70)
  });
  
  it('Game with two strikes has score 42', function() {
    rolls(10, 2)
    rolls(2, 2)
    rolls(0, 14)
    expect(bowlingGame.score).toEqual(42)
  });
});
