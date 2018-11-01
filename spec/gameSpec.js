'use strict';

describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('creates a game', function() {
    expect(game).toBeDefined();
  });

});
