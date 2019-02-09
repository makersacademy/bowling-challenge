var BowlingGame = require('../../src/BowlingGame.js')

describe('SingleStrikeBowlingGame', function() {

  var bowlingGame;

  var rolls = function(score, numOfRolls) {
    for (i = 0; i < numOfRolls; i++) {
      bowlingGame.roll(score)
    };
  };
  
  beforeEach(function() {
    bowlingGame = new BowlingGame()
  });

  it('game has an initial score of 0 and frame 0', function() {
    expect(bowlingGame.score).toEqual(0)
    expect(bowlingGame.frame).toEqual(0)
  });

  it('game has score of 30 after first 10 rolls of 3', function() {
    rolls(3, 10)
    expect(bowlingGame.score).toEqual(30)
    expect(bowlingGame.frame).toEqual(5)
  });

  it('strikes cause frame to end', function() {
    bowlingGame.roll(10)
    bowlingGame.roll(3)
    expect(bowlingGame.frame).toEqual(2)
  });

}); 
