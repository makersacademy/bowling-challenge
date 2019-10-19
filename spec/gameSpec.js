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
      game.addBowl(10);
      expect(game.frames[0][0]).toEqual(10);
      expect(game.frames[0][1]).toEqual(0);
    });

    it("adds a spare to the scorecard", function() {
      game.addBowl(4);
      game.addBowl(6);
      expect(game.frames[0][0]).toEqual(4);
      expect(game.frames[0][1]).toEqual(6);
    });

    it("does not allow a single bowl of more than 10 pins", function() {
      game.addBowl(11);
      expect(game.frames[0][0]).not.toEqual(11);
    });

    it("does not allow a combined bowl of more than 10 pins", function() {
      game.addBowl(6);
      game.addBowl(7);
      expect(game.frames[0][0]).toEqual(6);
      expect(game.frames[0][1]).not.toEqual(7);
    });

  });

  describe('calculateScore', function() {

    it("calculates the total score of less than 10 for 1 frame ", function() {
      game.frames = [[5,2]];
      game.calculateScore();
      expect(game.total_score).toEqual(7);
    });

    it("calculates the total score of less than 10 for 2 frames", function() {
      game.frames = [[5,2],[2,7]];
      game.calculateScore();
      expect(game.total_score).toEqual(16);
    });

    it("doubles the score of the next frame after a strike", function() {
      game.frames = [[5,2],[2,7]];
      game.calculateScore();
      expect(game.total_score).toEqual(16);
    });

  });

});
