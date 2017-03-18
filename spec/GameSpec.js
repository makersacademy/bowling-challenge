'use strict';

describe("BowlingGame", function() {
  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  describe("Beginning of game", function() {

    it("has empty frames", function() {
      expect(game.frames).toEqual([]);
    });

    it("has no total score", function() {
      expect(game.totalscore).toEqual(0);
    });

    it("player is able to bowl", function() {
      expect(game.canBowl()).toEqual(true);
    });
  });

  describe("Game play", function() {

    it("adds first score to frames", function() {
      game.addNewFrame([2,3]);
      expect(game.frames).toEqual([[2,3]])
    });

    it("adds second scores to frames", function() {
      game.addNewFrame([2, 3]);
      game.addNewFrame([10, 0]);
      expect(game.frames).toEqual([[2, 3], [10, 0]])
    });

  });

  describe("#calculateScore", function() {

    it("calculates total score", function() {
      game.addNewFrame([2, 3]);
      game.addNewFrame([10, 0]);
      expect(game.totalscore).toEqual(16);
    });
  });
});
