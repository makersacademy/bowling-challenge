'use strict';

describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('initializes with an empty frames array', function() {
    expect(game.frames).toEqual([])
  })
})
