'use strict';

describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game
  });

  it('creates 10 frames', function() {
    game.start()
    expect(game._allFrames.length).toEqual(10)
  });
});
