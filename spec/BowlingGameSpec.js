'use strict';

describe('BowlingGame', function(){
  let game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  it('can score a perfect game', function() {
    game.roll([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]);
    expect(game.score()).toEqual(300)
  });

  it('can score a regular game', function() {
    game.roll([1,4, 4,5, 6, 4, 5, 5, 10, 0, 1, 7, 3, 6, 4, 10, 2, 8, 6]);
    expect(game.score()).toEqual(133)
  })

  it('can score a gutter game', function() {
    game.roll([0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0]);
    expect(game.score()).toEqual(0);
  });

  it('can score a game of ones', function() {
    game.roll([1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1]);
    expect(game.score()).toEqual(20)
  });

  it('can score a spare', function() {
    game.roll([1,9, 3,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0]);
    expect(game.score()).toEqual(16);
  });

  it('can score a strike', function(){
    game.roll([10, 3,3, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0]);
    expect(game.score()).toEqual(22);
  });

});
