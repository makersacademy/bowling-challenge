var BowlingGame = require('../../src/BowlingGame.js')

describe('BowlingGameWithStrikesandSpares', function() {

  var bowlingGame;

  var rolls = function(score, numOfRolls) {
    for (i = 0; i < numOfRolls; i++) {
      bowlingGame.roll(score)
    };
  };

  beforeEach(function() {
    bowlingGame = new BowlingGame()
  });

  it('Game with spares and strikes has score of 115', function() {
    bowlingGame.roll(1)
    bowlingGame.roll(4)
    bowlingGame.roll(4)
    bowlingGame.roll(5)
    bowlingGame.roll(6)
    bowlingGame.roll(4)
    bowlingGame.roll(5)
    bowlingGame.roll(5)
    bowlingGame.roll(10)
    bowlingGame.roll(0)
    bowlingGame.roll(1)
    bowlingGame.roll(7)
    bowlingGame.roll(3)
    bowlingGame.roll(6)
    bowlingGame.roll(4)
    bowlingGame.roll(10)
    bowlingGame.roll(2)
    bowlingGame.roll(2)
    expect(bowlingGame.runningTotal).toEqual(115)
  });
});

