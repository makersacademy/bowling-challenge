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

it('game has an initial score of 0', function() {
    expect(bowlingGame.runningTotal).toEqual(0)
  });

it('game has an initial frame of 0', function() {
  expect(bowlingGame.frame).toEqual(0) 
  });

it('game has frame 1 ater first roll', function() {
  bowlingGame.roll(0)
  expect(bowlingGame.frame).toEqual(1) 
  });

});
