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

});