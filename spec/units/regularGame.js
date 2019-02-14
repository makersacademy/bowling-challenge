var BowlingGame = require('../../src/BowlingGame.js')

describe('RegularGame', function() {

  var bowlingGame;

  var rolls = function(score, numOfRolls) {
    for (i = 0; i < numOfRolls; i++) {
      bowlingGame.roll(score)
    };
  };
  
  beforeEach(function() {
    bowlingGame = new BowlingGame()
  });

  it('Scorecard has all info after 20 rolls', function() {
    rolls(3,20)
    expect(bowlingGame.scoreCard[19].frame).toEqual(10)
    expect(bowlingGame.scoreCard[19].rollNum).toEqual(2)
    expect(bowlingGame.scoreCard[19].score).toEqual(60)
    expect(bowlingGame.scoreCard[19].pinsKnocked).toEqual(3)
    expect(bowlingGame.scoreCard[19].length).toEqual(20)
  });
});
