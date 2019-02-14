var BowlingGame = require('../../src/BowlingGame.js')

describe('BowlingGameWithSpares', function() {
  
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
    expect(bowlingGame.runningTotal).toEqual(16)
  });

  it('Game with 9 spares has score of 136', function() {
    rolls(5,18)
    rolls(2,2)
    expect(bowlingGame.runningTotal).toEqual(136)
  });  
  
  it('Game with spare in the last round isnt complete after second roll', function() {
    rolls(0,18)
    rolls(5,2)
    expect(bowlingGame.isComplete).toEqual(false)
  });

  it('Game with spare in the last round isnt complete after second roll', function() {
    rolls(0,18)
    rolls(5,2)
    rolls(0,1)
    expect(bowlingGame.isComplete).toEqual(true)
  });
});
