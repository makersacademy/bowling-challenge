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

  it('game has an initial score of 0 and frame 0', function() {
    expect(bowlingGame.score).toEqual(0)
    expect(bowlingGame.frame).toEqual(0)
  });

  it('game has score of 30 after first 10 rolls of 3', function() {
    rolls(3, 10)
    expect(bowlingGame.score).toEqual(30)
    expect(bowlingGame.frame).toEqual(5)
  });

  it('first roll strikes cause frame to end', function() {
    bowlingGame.roll(10)
    bowlingGame.roll(3)
    expect(bowlingGame.frame).toEqual(2)
  });

  it('third roll strikes cause frame to end', function() {
    rolls(3,2)
    bowlingGame.roll(10)
    bowlingGame.roll(3)
    expect(bowlingGame.frame).toEqual(3)
  });
  
  it('roll after strike has rollnum of 1', function() {
    bowlingGame.roll(10)
    bowlingGame.roll(1)
    expect(bowlingGame._rollNum).toEqual(1)
  });
  
  it ('roll after strike includes bonus points', function() {
    bowlingGame.roll(10)
    bowlingGame.roll(3)
    bowlingGame.roll(2)
    expect(bowlingGame.score).toEqual(20)
  });

  it ('is in frame 3 after two strikes and one regular rolls', function() {
    bowlingGame.roll(10)
    bowlingGame.roll(10)
    bowlingGame.roll(2)
    expect(bowlingGame.frame).toEqual(3)
    expect(bowlingGame._rollNum).toEqual(1)
  });

  it ('two strikes in a row has includes bonus points', function() {
    bowlingGame.roll(10)
    bowlingGame.roll(10)
    bowlingGame.roll(4)
    bowlingGame.roll(2)
    expect(bowlingGame.score).toEqual(46)
  });

}); 
