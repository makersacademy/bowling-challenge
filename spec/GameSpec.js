'use strict';

describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  function rollLoop(n, pins) {
    for (var i = 0; i < n; i++) {
      game.roll(pins)
    }
  }

  function rollSpare() {
    game.roll(5);
    game.roll(5);
  }

  it('calculates a gutter game', function() {
    rollLoop(20, 0);
    expect(game.score()).toEqual(0);
  });

  it('calculates 20 if all rolls hit 1 pin', function() {
    rollLoop(20, 1);
    expect(game.score()).toEqual(20);
  });

  it('calculates one spare', function() {
    rollSpare();
    game.roll(5);
    rollLoop(17, 0);
    expect(game.score()).toEqual(20);
  });

  it('calculates one strike', function() {
    game.roll(10); // Frame 1: 10 + (3 + 6)= 19
    game.roll(3);
    game.roll(6); // Frame 2: 3 + 6 = 9
                  // Total: 19 + 9 = 28
    rollLoop(17, 0);
    expect(game.score()).toEqual(28);
  });

  it('calculates a perfect game', function() {
    rollLoop(12, 10);
    expect(game.score()).toEqual(300);
  });

});
