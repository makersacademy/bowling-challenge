var BowlingGame = require('../../src/BowlingGame.js')

describe('BowlingRegularGame', function() {
  
  var bowlingGame = new BowlingGame();
  
  it('Regular Game with no spares or strikes finishes with score 71', function() {
    bowlingGame.roll(5)
    bowlingGame.roll(1)
    bowlingGame.roll(6)
    bowlingGame.roll(3)
    bowlingGame.roll(6)
    bowlingGame.roll(1)
    bowlingGame.roll(2)
    bowlingGame.roll(1)
    bowlingGame.roll(8)
    bowlingGame.roll(1)
    bowlingGame.roll(3)
    bowlingGame.roll(4)
    bowlingGame.roll(5)
    bowlingGame.roll(4)
    bowlingGame.roll(3)
    bowlingGame.roll(2)
    bowlingGame.roll(6)
    bowlingGame.roll(1)
    bowlingGame.roll(8)
    bowlingGame.roll(1)
    expect(bowlingGame.runningTotal).toEqual(71)
  });
});
  

