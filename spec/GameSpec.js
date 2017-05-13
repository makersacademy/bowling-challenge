'use strict';

describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('is defined', function() {
    expect(game).toBeDefined();
  });

  it('holds current score', function() {
    game.bowl(5);
    expect(game.score.frame.current).toEqual([5]);
  });

  it('starts at first frame', function() {
    expect(game.frameNumber).toEqual(1);
  });
});
