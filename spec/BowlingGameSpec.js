'use strict';

describe("BowlingGame", function() {
  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  describe("score", function() {
    it("rolls 7 pins, returns 7", function() {
      game.roll(7)
      expect(game.score()).toEqual(7);
    });

    it("rolls 7 and 2, returns 9", function() {
      game.roll(7)
      game.roll(2)
      expect(game.score()).toEqual(9);
    });

    it("rolls 7, 2 and 3, returns 12", function() {
      game.roll(7)
      game.roll(2)
      game.roll(3)
      expect(game.score()).toEqual(12);
    });

    it("rolls 7, spare, 2, 3, returns 12", function() {
      game.roll(7)
      game.roll(3)
      game.roll(2)
      game.roll(3)
      expect(game.score()).toEqual(17);
    });

    it("never hits a pin, scores 0", function() {
      game.roll(0).repeat(20)
      expect(game.score()).toEqual(0);
    });
  });
});
