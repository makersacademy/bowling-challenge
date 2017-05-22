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

  it('calculates basic no-bonus full game', function() {
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

  it('calculates basic full game with spares', function() {
    var i = 0;
    for (; i < 10; i++) {
      game.bowl(4);
      game.bowl(6);
    }
    game.bowl(4);
    expect(game.totalScore).toEqual(140);
  });

  it('calculates basic strike scores', function() {
    game.bowl(10);
    expect(game.totalScore).toEqual(10);
    game.bowl(4);
    game.bowl(5);
    expect(game.totalScore).toEqual(28)
  });

  it('calculates sequential strike scores', function() {
    game.bowl(10);
    game.bowl(10);
    game.bowl(10);
    game.bowl(4);
    game.bowl(3);
    expect(game.totalScore).toEqual(78);
  });

  it('calculates strikes scores with partial frames', function() {
    var i = 0;
    for (; i < 2; i++) {
      game.bowl(10);
    }
    game.bowl(3);
    expect(game.totalScore).toEqual(39);
  });

  it('calculates basic full game with strikes', function() {
    var i = 0;
    for (; i < 9; i++) {
      game.bowl(10);
    }
    game.bowl(3);
    game.bowl(4);
    expect(game.totalScore).toEqual(257);
  });

  it('calculates perfect game with strikes', function() {
    var i = 0;
    for (; i < 12; i++) {
      game.bowl(10);
    }
    expect(game.totalScore).toEqual(300);
  });
});
