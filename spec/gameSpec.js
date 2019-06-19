'use strict';

describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("The 'total' method", function() {
    it("should sum all the values in the 'scores' dictionary", function() {
      game.roll(5);
      game.roll(2);
      game.roll(4);
      game.roll(0);
      expect(game.total()).toEqual(11);
    });
  });

  describe("The '_resolveStrikes' method", function() {
    it("should add to a frame the next two scores after a strike", function() {
      game.roll(10);
      game.roll(5);
      game.roll(2);
      expect(game.scores[1]).toEqual(17);
    });
  });

  describe("The '_resolveSpare' method", function() {
    beforeEach(function() {
      game.roll(5);
      game.roll(5);
      game.roll(5);
      game.roll(3);
    });

    it("should add the next roll to the previous frame", function() {
      expect(game.scores[1]).toEqual(15);
    });

    it("should set 'isSpare' to false", function() {
      expect(game.isSpare).toEqual(false);
    })
  });

  describe("A 'Perfect Game'", function() {
    it("12 rolls of 10 should score 300", function() {
      var i;
      for (i = 0; i < 12; i++) {
        game.roll(10);
      }

      expect(game.scores[10]).toEqual(30);
      expect(game.total()).toEqual(300);
    });
  });

  describe("A 'Gutter Game'", function() {
    it("20 rolls of 0 should score 0", function() {
      var i;
      for (i = 0; i < 12; i++) {
        game.roll(0);
        game.roll(0);
      }
      expect(game.total()).toEqual(0);
    });
  });
});
