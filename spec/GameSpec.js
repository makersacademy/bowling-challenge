'use strict';

describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('starts with no frames', function() {
    expect(game.frames).toEqual([])
  });

});
