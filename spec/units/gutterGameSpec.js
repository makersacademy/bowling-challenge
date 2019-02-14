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

it('game has an initial score of 0', function() {
    expect(bowlingGame.runningTotal).toEqual(0)
  });

it('game has an initial frame of 0', function() {
  expect(bowlingGame.frame).toEqual(0) 
  });

it('game has an initial rollNum of 0', function() {
  expect(bowlingGame.rollNum).toEqual(0) 
  });

it('game has frame 1 after first roll', function() {
  bowlingGame.roll(0)
  expect(bowlingGame.frame).toEqual(1) 
  });

it('game has rollNum 1 after first roll', function() {
  bowlingGame.roll(0)
  expect(bowlingGame.rollNum).toEqual(1)
  });

it('game has frame 1 after second  roll', function() {
  rolls(0, 2)
  expect(bowlingGame.frame).toEqual(1) 
  });

it('game has rollNum 2 after second roll', function() {
  rolls(0, 2)
  expect(bowlingGame.rollNum).toEqual(2)
  });

it('game has rollNum 1 after third roll', function() {
  rolls(0, 3)
  expect(bowlingGame.rollNum).toEqual(1)
  });

it('game has rollNum 2, frame 10 and score of 0 after 20 rolls of 0', function () {
  rolls(0,20)
  expect(bowlingGame.frame).toEqual(10)
  expect(bowlingGame.runningTotal).toEqual(0)
  expect(bowlingGame.rollNum).toEqual(2)
 }); 
});
