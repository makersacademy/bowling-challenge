'use strict';

describe('BowlingGame', function(){
  let game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  it('can score a gutter game', function() {
    roll(20, 0)
    expect(game.score()).toEqual(0);
  });

  it('can score a game of ones', function() {
    roll(20, 1)
    expect(game.score()).toEqual(20)
  });

  it('can score a spare', function() {
    game.roll(1);
    game.roll(9);
    game.roll(3);
    roll(17, 0)
    expect(game.score()).toEqual(13);
  });


  function roll(times, pinsDown) {
    for (var i = 0; i < times; i++){
      game.roll(pinsDown);
    }
  }

});
