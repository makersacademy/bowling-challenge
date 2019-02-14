var BowlingGame = require('../../src/BowlingGame.js')

describe('StrikeBowlingGame', function() {

  var bowlingGame;

  var rolls = function(score, numOfRolls) {
    for (i = 0; i < numOfRolls; i++) {
      bowlingGame.roll(score)
    };
  };

  beforeEach(function() {
    bowlingGame = new BowlingGame()
  });

  it('after one strike frame increases by 1', function() {
    bowlingGame.roll(10)
    rolls(1,2)
    expect(bowlingGame.frame).toEqual(2)
  });

  it('after one strike score is caculated correctly', function() {
    bowlingGame.roll(10)
    rolls(1,2)
    expect(bowlingGame.runningTotal).toEqual(14)
  });

  it('after one strike and two rolls, rollNum is 2', function() {
    bowlingGame.roll(10)
    rolls(1,2)
    expect(bowlingGame.rollNum).toEqual(2)
  });
});
