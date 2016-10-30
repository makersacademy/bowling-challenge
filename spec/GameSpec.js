"use strict";

describe("Game", function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('returns a 0 points game for all gutter balls', function() {
    roll(20, 0);
    expect(game.score()).toEqual(0);
  });

  it('returns a 20 points game for 1 point rolls', function() {
    roll(20, 1);
    expect(game.score()).toEqual(20);
  });

  it('can roll a spare', function() {
    game.roll(5);
    game.roll(5);
    game.roll(2);
    roll(17, 0);
    expect(game.score()).toEqual(14);
  });

  function roll(times, pinsDown) {
    for (var i = 0; i < times; i++) {
      game.roll(pinsDown);
    }
  }

});
