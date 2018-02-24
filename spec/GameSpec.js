'use strict';

describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('score starts at zero', function() {
    expect(game.score).toEqual(0);
  });
});
