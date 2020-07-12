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
    for(var i = 0; i < 20; i++) {
    game.roll(15)
    }
    expect(game.score()).toEqual(300)
  })

  it('calculates a gutter game', function() {
    for(var i = 0; i < 20; i++) {
    game.roll(0);
    }
    expect(game.score()).toEqual(0);
  })

  it('calculates a spare', function() {
    for(var i = 0; i < 20; i++) {
    game.roll([5,5]);
  }
    expect(game.isSpare()).toEqual(10);
  })

  it('calculates two strikes for one frame', function() {
    for(var i = 0; i < 20; i++) {
    game.roll([10]);
  }
    expect(game.isStrike()).toEqual(true);
  })




});
