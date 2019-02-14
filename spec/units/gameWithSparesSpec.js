var BowlingGame = require('../../src/BowlingGame.js')

describe('GameWithSpares', function() {

  var bowlingGame;

  var rolls = function(score, numOfRolls) {
    for (i = 0; i < numOfRolls; i++) {
      bowlingGame.roll(score)
    };
  };

  beforeEach(function() {
    bowlingGame = new BowlingGame()
  });

  it('game has score of 12 after one spare and two 1s', function() {
    bowlingGame.roll(2)
    bowlingGame.roll(8)
    rolls(1,2)
    expect(bowlingGame.runningTotal).toEqual(13)
    expect(bowlingGame.frame).toEqual(2)
    expect(bowlingGame.rollNum).toEqual(2)
    });
  
  it('game with all spares ignoring last round has final score 130', function() {
    rolls(5,18)
    rolls(0,2)
    expect(bowlingGame.runningTotal).toEqual(130)
    expect(bowlingGame.frame).toEqual(10)
    expect(bowlingGame.rollNum).toEqual(2)
  });
});
