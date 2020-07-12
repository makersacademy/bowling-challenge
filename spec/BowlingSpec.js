'use strict';
describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new BowlingGame();
  })

  it('has a maximum of 10 points per roll', function(){
    expect(game.MAXIMUM_POINTS).toEqual(10);
  });


  it('calculates a perfect game', function() {
    rollBalls(15,20)
    game.roll(15)
    expect(game.score()).toEqual(300)
  })

  it('calculates a gutter game', function() {
    rollBalls(0,20)
    game.roll(0);
    expect(game.score()).toEqual(0);
  })

  it('calculates a spare', function() {
    rollBalls(0,18)
    game.roll([5,5]);
    expect(game.isSpare()).toEqual(10);
  })

  it('calculates two strikes for one frame', function() {
    game.roll([10]);
    game.roll([10]);
    rollBalls(0,18);
    expect(game.isStrike()).toEqual(true);
  })

  var rollBalls = function(pins, rolls) {
    for(var i = 0; i < rolls; i++) {
      game.roll(pins);
  }
};




});
