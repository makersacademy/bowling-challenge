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

  it('after one strike score is calculated correctly', function() {
    bowlingGame.roll(10)
    rolls(1,2)
    expect(bowlingGame.runningTotal).toEqual(14)
  });

  it('after one strike and two rolls, rollNum is 2', function() {
    bowlingGame.roll(10)
    rolls(1,2)
    expect(bowlingGame.rollNum).toEqual(2)
  });

  it('after 9 strikes and 2 scores of 0, score is 240 with frame 10 and rollNum 2', function() {
    rolls(10, 9)
    rolls(0, 2)
    expect(bowlingGame.scoreCard[10].score).toEqual(240)
    expect(bowlingGame.scoreCard[10].frame).toEqual(10)
    expect(bowlingGame.scoreCard[10].rollNum).toEqual(2)
  });

  it('if strike is scored in the 10th frame, game is not complete after first bonus roll', function() {
    rolls(0,18)
    bowlingGame.roll(10)
    bowlingGame.roll(1)
    expect(bowlingGame.isComplete).toEqual(false)
    expect(bowlingGame.frame).toEqual(10)
    expect(bowlingGame.rollNum).toEqual(2)
  });

  it('if strike is scored in the 10th frame, game is complete after second bonus roll', function() {
    rolls(0,18)
    bowlingGame.roll(10)
    rolls(0,2)
    expect(bowlingGame.isComplete).toEqual(true)
    expect(bowlingGame.frame).toEqual(10)
    expect(bowlingGame.rollNum).toEqual(3)
  });
});
