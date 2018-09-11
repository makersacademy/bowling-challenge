"use strict";

describe('Game', function() {
//  var Game = require('../../public/js/Game');
  var game;

  beforeEach(function(){
    game = new Game();
  });

  describe('.play', function() {
    it('For every roll, puts a new frame in the array', function() {
      var frame = game.play([5, 1]);
      expect(game.frameArray).toEqual([frame]);
    });
  });

  describe('.score', function() {
    it('Returns the total score', function() {
      game.play([5, 1]);
      expect(game.score).toEqual(6);
    });
  });
});
