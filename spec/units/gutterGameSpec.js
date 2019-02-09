var BowlingGame = require('../../src/BowlingGame.js')
console.log(BowlingGame)
describe('BowlingGame', function() {

  var bowlingGame;

  var rolls = function(score, numOfRolls) {
    for (i = 0; i < numOfRolls; i++) {
      bowlingGame.roll(score)
    };
  };

  beforeEach(function() {
    bowlingGame = new BowlingGame()
  });

  it('game has an initial score of 0 in frame 1', function() {
    expect(bowlingGame.score).toEqual(0)
    expect(bowlingGame.frame).toEqual(1)
  });


  it('game has a score of 0 after first roll of 0', function() {
    bowlingGame.roll(0);
    expect(bowlingGame.frame).toEqual(1)
    expect(bowlingGame.score).toEqual(0)
  });
 
  it('game has score of 0 after 2 rolls of 0 points', function() {
    rolls(0, 2);
    expect(bowlingGame.frame).toEqual(1)
    expect(bowlingGame.score).toEqual(0)
  });
});
