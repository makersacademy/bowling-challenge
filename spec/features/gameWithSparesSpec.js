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
  
  it('Game with one spare has score of 16', function() {
    bowlingGame.roll(4)
    bowlingGame.roll(6)
    rolls(2,2)
    rolls(0,16)
    bowlingGame.calculateScore()
    expect(bowlingGame.score).toEqual(16)
  });

  it('Game with 9 spares has score of 136', function() {
    rolls(5, 18)
    rolls(2,2)
    bowlingGame.calculateScore()
    expect(bowlingGame.score).toEqual(136)
  });  
});
