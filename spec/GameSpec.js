"use strict";

describe("Game", function () {
  var game;
  var randomGame = [4, 5, 4, 4, 6, 3, 3, 5, 7, 2, 8, 1, 2, 7, 2, 4, 5, 1, 2, 3];
  beforeEach(function () {
    game = new Game();
  });

  function simulateRolls(array) {
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      game.roll(element);
    }
  }

  describe("Should store the players score for each frame correctly", function () {
    it("stores the first roll of the player in a frame", function () {
      simulateRolls([5]);
      expect(game.frame).toEqual([5]);
    });
    it("stores the first frame of the game in the game frames instance variable", function () {
      simulateRolls([5, 4]);
      expect(game.gameFrames).toEqual([[5, 4]]);
    });
    it("stores the first frame into the game instance variable and populates first roll into frame", function () {
      simulateRolls([5, 4, 7]);
      expect(game.gameFrames).toEqual([[5, 4]]);
      expect(game.frame).toEqual([7]);
    });
  });

  describe("calculates the score at the end of the game", function () {
    it("shows the correct score for a standard game with no bonuses considered", function () {
      simulateRolls(randomGame);
      game.calculateScore();
      expect(game.currentScore).toEqual(78);
    });
  });

  describe("We know which round (frame) of the game it is", function () {
    it("checks the game round is correct mid-game with no bonuses considered", function () {
      simulateRolls([5, 4, 3, 2, 4, 4]);
      expect(game.round).toEqual(4);
    });
    it("game knows it's the last round", function () {
      simulateRolls([4, 5, 4, 4, 6, 3, 3, 5, 7, 2, 8, 1, 2, 7, 2, 4, 5, 1]);
      expect(game.round).toEqual(10);
    });
    it("game knows it's the first round", function () {
      expect(game.round).toEqual(1);
    });
  });

  describe("Game knows how to deal with spares", function () {
    it("checks if a frame has a spare", function () {
      simulateRolls([5, 5]);
      expect(game.spareBonus).toEqual(true);
    });
    it("checks if a frame has a spare", function () {
      simulateRolls([5, 4]);
      expect(game.spareBonus).toEqual(false);
    });
    it("calculates the correct score with a spare bonus", function () {
      simulateRolls([5, 5, 4, 5]);
      game.calculateScore();
      expect(game.currentScore).toEqual(23);
    });
    it("calculates the correct score with a spare bonus", function () {
      simulateRolls([5, 5, 4, 5, 5, 5, 5, 5, 6, 3]);
      game.calculateScore();
      expect(game.currentScore).toEqual(63);
    });
  });

  describe("Game knows how to deal with strikes", function () {
    it("calculates the correct score for a strike", function () {
      simulateRolls([10, 5, 3]);
      game.calculateScore();
      expect(game.currentScore).toEqual(26);
    });

    it("calculates the correct score for a strike", function () {
      simulateRolls([10, 10, 5, 3]);
      console.log(game.strikeScore);
      game.calculateScore();
      expect(game.currentScore).toEqual(51);
    });

    it("calculates the correct score for a strike", function () {
      simulateRolls([10, 10, 10, 5, 3]);
      console.log(game.strikeScore);
      game.calculateScore();
      expect(game.currentScore).toEqual(81);
    });
  });
});
