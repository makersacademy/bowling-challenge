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

    it("gets the final score of 50 for normal game (no strikes / no spares)", function () {
      var game = new Game();
      let rolls = [2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3]
      game.addPinRolls(rolls);
      expect(game.getFinalScore(game.rolls)).toEqual(50);
    });

    it("gets the final score of 70 for normal game (no strikes / no spares)", function () {
      var game = new Game();
      let rolls = [2, 5, 2, 5, 2, 5, 2, 5, 2, 5, 2, 5, 2, 5, 2, 5, 2, 5, 2, 5]
      game.addPinRolls(rolls);
      expect(game.getFinalScore(game.rolls)).toEqual(70);
    });

    it("gets the final score of 45 for random game (no strikes / no spares)", function () {
      var game = new Game();
      let rolls = [0, 1, 2, 3, 5, 4, 2, 3, 0, 2, 6, 2, 0, 0, 1, 2, 3, 4, 5, 0]
      game.addPinRolls(rolls);
      expect(game.getFinalScore(game.rolls)).toEqual(45);
    });

  });

  describe('strike', function () {
  
    it("returns a strike if frame roll over 10 pins", function () {
      var game = new Game();
      var pins = 10;
      expect(game.strike(pins)).toEqual(true);
    });

  });

});