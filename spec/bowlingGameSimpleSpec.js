'use strict';

describe("Game", function () {
  
  describe('addPinRolls', function () {

    it("adds an array of pin rolls", function () {
      var game = new Game();
      let rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      game.addPinRolls(rolls);
      expect(game.pinRolls).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    });

  });

  describe('getFinalScore', function () {
    
    it("gets the final score of 0 for the gutter game", function () {
      var game = new Game();
      let rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      game.addPinRolls(rolls);
      expect(game.getFinalScore(game.rolls)).toEqual(0);
    });

  });

});