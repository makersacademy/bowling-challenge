'use strict';

describe("Feature Tests", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('calculates basic scores', function() {
    game.bowl(4);
    game.bowl(5);
    expect(game.totalScore).toEqual(9);
  });

  it('calculates basic no-bonus game', function() {
    var i = 0;
    for (; i < 9; i++) {
      game.bowl(4);
      game.bowl(5);
    }
    game.bowl(3);
    game.bowl(4);
    expect(game.totalScore).toEqual(88);
  });

  it('calculates basic spare scores', function() {
    game.bowl(4);
    game.bowl(6);
    game.bowl(5);
    game.bowl(4);
    expect(game.totalScore).toEqual(24);
  });

  it('calculates sequential spare scores', function() {
    game.bowl(4);
    game.bowl(6);
    game.bowl(5);
    game.bowl(5);
    game.bowl(2);
    game.bowl(8);
    expect(game.totalScore).toEqual(37);
  });

  it('calculates basic game with spares', function() {
    var i = 0;
    for (; i < 10; i++) {
      game.bowl(4);
      game.bowl(6);
    }
    game.bowl(4);
    expect(game.totalScore).toEqual(140);
  });
});
