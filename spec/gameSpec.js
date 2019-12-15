'use strict';

describe('Game',function() {
  var game;

  beforeEach(function() {
    game = new Game;
  });

  it('can roll a gutter game',function() {
    for(let i=0; i<20; i++) {
      game.roll(0)
    };
    expect(game.score()).toBe(0)
  });

  it('can roll a game',function() {
    for(let i=0; i<20; i++) {
      game.roll(1)
    };
    expect(game.score()).toBe(20)
  });

  it('can roll a spare game',function() {
    game.roll(3);
    game.roll(7);
    game.roll(5);
    for(let i=0; i<17; i++) {
      game.roll(0)
    };
    expect(game.score()).toBe(20)
  });


});