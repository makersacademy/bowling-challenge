var BowlingGame = require('../../src/BowlingGame.js')

describe('GutterBowlingGame', function() {

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
});
