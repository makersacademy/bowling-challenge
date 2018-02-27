'use strict';

describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  var completeGame = function(pins, rolls) {
    for (var i = 0; i < rolls; i++) {
      game.roll(pins);
    };
  };

  it('can roll a gutter game', function() {
    completeGame(0, 20);
    expect(game.score()).toBe(0);
  });

  it('can roll a game of ones', function () {
    completeGame(1, 20);
    expect(game.score()).toBe(20);
  });

  it('can roll a spare', function() {
    game.roll(5);
    game.roll(5);
    game.roll(5);
    completeGame(0, 17);
    expect(game.score()).toBe(20);
  });

  it('can roll a strike', function() {
    game.roll(10);
    game.roll(3);
    game.roll(2);
    completeGame(0, 16);
    expect(game.score()).toBe(20);
  });

  it('can roll a perfect game', function() {
    completeGame(10, 12);
    expect(game.score()).toBe(300);
  });

  it('calculates score correctly', function() {
    game.roll(3);
    game.roll(2);
    game.roll(3);
    game.roll(2);
    game.roll(3);
    game.roll(2);
    game.roll(3);
    game.roll(2);
    game.roll(3);
    game.roll(2);
    game.roll(3);
    game.roll(2);
    game.roll(3);
    game.roll(2);
    game.roll(3);
    game.roll(2);
    game.roll(3);
    game.roll(2);
    game.roll(3);
    game.roll(7);
    game.roll(2);
    expect(game.score()).toBe(57);
  });

});
