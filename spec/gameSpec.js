'use strict';

describe("Bowling game",function() {
  var game;
  beforeEach(function() {
    game = new Game();
  });

  describe("Player can roll a bowl",function() {
    it("and can knock pins in range form 0 to 10",function() {
      var resault = game.play();
      expect(resault).toBeGreaterThan(-1);
      expect(resault).toBeLessThan(11);
    });
  });
});
