'use strict';

describe("BowlingGame", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("Beginning of game", function() {

    it("has empty frames", function() {
      expect(game.frames).toEqual([]);
    });

    it("has no total score", function() {
      expect(game.totalscore).toEqual(0);
    });

    it("player is able to bowl", function() {
      expect(game._canBowl()).toEqual(true);
    });
  });

  describe("Game play", function() {

    it("adds bowls to frames", function() {
      game.addNewFrame(2, 3);
      game.addNewFrame(9, 0);
      expect(game.frames[0].totalFrame).toEqual([2, 3])
      expect(game.frames[1].totalFrame).toEqual([9, 0])
    });
  });

  describe("#calculateScore", function() {

    it("calculates total score", function() {
      game.addNewFrame(2, 3);
      game.addNewFrame(9, 0);
      expect(game.calculateScore()).toEqual(14);
    });
  });
});
