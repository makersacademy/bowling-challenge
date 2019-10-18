'use strict';

describe('Game', function() {
  var game

  beforeEach(function() {
    game = new Game();
  });

  describe('calculateScore', function() {

    it("calculates the total score for 1 frame", function() {
      game.frames = [[5,2]];
      game.calculateScore();
      expect(game.totalScore).toEqual(7);
    });

    it("calculates the total score for 2 frames", function() {
      game.frames = [[5,2],[2,7]];
      game.calculateScore();
      expect(game.totalScore).toEqual(16);
    });
  });

});
