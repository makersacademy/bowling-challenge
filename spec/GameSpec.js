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

  describe("Should store the players score for each frame", function () {
    it("stores the first roll of the player in a frame", function () {
      simulateRolls([5]);
      expect(game.frame).toEqual([5]);
    });
    it("stores the second roll of the player in a frame", function () {
      simulateRolls([5, 6]);
      expect(game.gameFrames).toEqual([[5, 6]]);
    });
  });

  describe("Store frames into the game instance variable", function () {
    it("stores the first frame into the game instance variable", function () {
      simulateRolls([5, 6, 7]);
      expect(game.gameFrames).toEqual([[5, 6]]);
      expect(game.frame).toEqual([7]);
    });
  });

  describe("calculates the score at the end of the game", function () {
    it("shows the correct score for a standard game with no bonuses", function () {
      simulateRolls(randomGame);
      game.calculateScore();
      expect(game.finalScore).toEqual(78);
    });
  });
});
