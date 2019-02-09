let BowlingGame = require('../../src/BowlingGame.js')
console.log(BowlingGame)
describe('BowlingGame', function() {

  let bowlingGame;

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
});
