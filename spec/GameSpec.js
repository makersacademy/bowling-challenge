'use strict';

describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('is defined', function() {
    expect(game).toBeDefined();
  });

  it('starts with no score', function() {
    expect(game.totalScore).toEqual(0);
  });

  it('starts with established frames', function() {
    expect(game.frames.length).toEqual(10);
  });

  it('can calculate the total score', function() {
    game.calculateTotal();
    expect(game.totalScore).toEqual(157);
  });
});
