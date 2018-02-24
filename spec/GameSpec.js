'use strict';

describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('score starts at zero', function() {
    expect(game.score).toEqual(0);
  });

  describe('bowl', function() {
    it('adds 1 bowl of pins to score', function() {
      game.bowl(7);
      expect(game.score).toEqual(7);
    });
  });

});
