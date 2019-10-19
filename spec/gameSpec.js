'use strict';

describe('Game', function() {
  var game

  beforeEach(function() {
    game = new Game();
  });

  describe('addBowl', function() {

    it("adds a bowl to an empty scorecard", function() {
      game.addBowl(5);
      expect(game.frames[0][0]).toEqual(5);
    });

    it("adds another bowl to a score card containing one bowl", function() {
      game.addBowl(5);
      game.addBowl(2);
      expect(game.frames[0][1]).toEqual(2);
    });

    it("adds a third bowl to a new frame", function() {
      game.addBowl(5);
      game.addBowl(2);
      game.addBowl(8);
      expect(game.frames[1][0]).toEqual(8);
    });

    it("adds a strike on the first bowl and ends the turn", function() {
      game.addBowl("X");
      expect(game.frames[0][0]).toEqual("X");
      expect(game.frames[0][1]).toEqual("-");
    });

    it("adds a spare to the scorecard", function() {
      game.addBowl(4);
      game.addBowl(6);
      expect(game.frames[0][0]).toEqual(4);
      expect(game.frames[0][1]).toEqual("/");
    });

  });

  describe('calculateScore', function() {

    it("calculates the total score for 1 frame", function() {
      game.frames = [[5,2]];
      game.calculateScore();
      expect(game.total_score).toEqual(7);
    });

    it("calculates the total score for 2 frames", function() {
      game.frames = [[5,2],[2,7]];
      game.calculateScore();
      expect(game.total_score).toEqual(16);
    });

  });

});
