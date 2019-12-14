"use strict";

describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("when setting up the game", function() {
    it("has a total score of 0", function() {
      expect(game.getTotalScore()).toEqual(0);
    });

    it("has an empty score sheet", function() {
      expect(game.getScoreSheet()).toEqual([]);
    });
  });

  describe("wheh playing the game", function() {
    it("can calculate the score of a frame", function() {
      game.play(2, 5);
      expect(game.getTotalScore()).toEqual(7);
    });
  
    it("can add bonus points to the previous frame, if there was a spare", function() {
      game.play(2, 8);
      game.play(2, 5);
      expect(game.getTotalScore()).toEqual(19);
      expect(game.getScoreSheet()).toEqual([{pins: [2, 8], score: 12}, {pins: [2, 5], score: 7}]);
    });

    it("can add bonus points to the previous frame, if there was a strike", function() {
      game.play(10);
      game.play(2, 5);
      expect(game.getTotalScore()).toEqual(24);
      expect(game.getScoreSheet()).toEqual([{pins: [10], score: 17}, {pins: [2, 5], score: 7}]);
    });
  });
});
