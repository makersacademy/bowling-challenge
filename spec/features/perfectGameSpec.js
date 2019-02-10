var BowlingGame = require('../../src/BowlingGame.js')

describe('BowlingPerfectGame', function() {
  
  var bowlingGame;
  
  var rolls = function(score, numOfRolls) {
    for (i = 0; i < numOfRolls; i++) {
      bowlingGame.roll(score)
    };
  };

  beforeEach(function() {
    bowlingGame = new BowlingGame()
  });

 it('Perfect game scores 300 points', function() {
    rolls(10, 12)
    bowlingGame.calculateScore()
    expect(bowlingGame.score).toEqual(300)
  });
}); 
