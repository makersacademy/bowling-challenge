"use strict";

describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('test', function(){
    it('initial spec test', function() {
      expect(game.test).not.toBe(undefined);
    });
  });
});