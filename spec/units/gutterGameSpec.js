let BowlingGame = require('../../src/BowlingGame.js')
console.log(BowlingGame)
describe('BowlingGame', function() {

  let bowlinggame;

  beforeEach(function() {
    bowlinggame = new BowlingGame()
  });

  it('game has an initial score of 0 in frame 1', function() {
    expect(bowlinggame.score).toEqual(0)
    expect(bowlinggame.frame).toEqual(1)
  });

});
