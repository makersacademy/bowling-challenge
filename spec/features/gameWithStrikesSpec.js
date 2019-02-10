var BowlingGame = require('../../src/BowlingGame.js')

describe('BowlingGameWithStrikes', function() {
  
  var bowlingGame; 
  
  var rolls = function(score, numOfRolls) {
    for (i = 0; i < numOfRolls; i++) {
      bowlingGame.roll(score)
    };
  };

  beforeEach(function() {
    bowlingGame = new BowlingGame()
  });
  
  it('Game with one strike has score 70', function() {
    rolls(3, 10)
    bowlingGame.roll(10)
    rolls(3, 8)
    bowlingGame.calculateScore()
    expect(bowlingGame.score).toEqual(70)
  });
  
  it('Game with two strikes has score 40', function() {
    rolls(10, 2)
    rolls(2, 2)
    rolls(0, 14)
    bowlingGame.calculateScore()
    expect(bowlingGame.score).toEqual(40)
  });

  it('Game with 9 strikes not in final round has score of 250', function() {
    rolls(10, 9)
    rolls(2, 2)
    bowlingGame.calculateScore()
    expect(bowlingGame.score).toEqual(250)
  });
});
