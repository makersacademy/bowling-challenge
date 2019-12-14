"use strict";

describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("when setting up the game", function() {
    it("has a default total score of 0", function() {
      expect(game.getTotalScore()).toEqual(0);
    });
  
    it("has an empty defaul frame sheet", function() {
      expect(game.getFrameSheet()).toEqual([]);
    });
  
    it("starts with a current roll number of 1", function() {
      expect(game.getCurrentRollNumber()).toEqual(1);
    });
  })

  describe("when calculating the score for frames 0 to 9", function() {
    it("can calculate the score of a frame without spare or strike", function() {
      game.calculateFrameScore(2, 5);
      expect(game.getTotalScore()).toEqual(7);
    });

    it("can calculate the score of a frame with spare", function() {
      game.calculateFrameScore(2, "/");
      expect(game.getTotalScore()).toEqual(10);
    });

    it("can calculate the score of a frame with strike", function() {
      game.calculateFrameScore("X");
      expect(game.getTotalScore()).toEqual(10);
    });
  });
});
