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

  describe("when playing the game", function() {
    it("can calculate the score for a frame without strike or spare, which is not the last frame", function() {
      game.calculateFrame(2, 5);
      expect(game.getTotalScore()).toEqual(7);
    });
  })
});
