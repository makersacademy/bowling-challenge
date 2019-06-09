'use strict';

describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("Properties", function() {
    it("should have a 'frame' property set to 1", function() {
      expect(game.frame).toEqual(1);
    });

    it("should have a 'rolls' property set to []", function() {
      expect(game.rolls).toEqual([]);
    });

    it("should have an 'allRolls' property set to []", function() {
      expect(game.allRolls).toEqual([]);
    });

    it("should have a 'scores' property set to {}", function() {
      expect(game.scores).toEqual({});
    });

    it("should have an 'activeStrikes' property set to []", function() {
      expect(game.activeStrikes).toEqual([]);
    });

    it("should have an '_isSpare' property set to false", function() {
      expect(game._isSpare).toEqual(false);
    });
  });

  describe("The first use of 'roll' method in a frame", function() {
    it("should set 'rolls[0]' to its argument", function() {
      game.roll(5);
      expect(game.rolls[0]).toEqual(5);
    });

    it("should push argument to 'allRolls' array", function() {
      game.roll(5);
      expect(game.allRolls).toEqual([5]);
    });

    it("should create a key-value pair in 'scores'",function() {
      game.roll(5);
      expect(game.scores).toEqual({ 1: 5 })
    });

    it("should start a new frame if a strike", function() {
      game.roll(10);
      expect(game.frame).toEqual(2);
      expect(game.rolls).toEqual([]);
    });

    it("should push to 'activeStrikes' array if a strike", function() {
      game.roll(10);
      expect(game.activeStrikes).toEqual([[1, 0]]);
    });
  });

  describe("The second use of 'roll' method in a frame", function() {
    beforeEach(function() {
      game.roll(5);
    });

    it("should set 'rolls[1]' to its argument", function() {
      spyOn(game, "_newFrame").and.returnValue(null);
      game.roll(5);
      expect(game.rolls[1]).toEqual(5);
    });

    it("should push argument to 'allRolls' array", function() {
      game.roll(5);
      expect(game.allRolls).toEqual([5, 5]);
    });

    it("should add pins to the correct frame value in 'scores'", function() {
      game.roll(4);
      expect(game.scores).toEqual({1: 9});
    });

    it("should start a new frame", function() {
      game.roll(5);
      expect(game.frame).toEqual(2);
      expect(game.rolls).toEqual([]);
    });

    it("should set 'isSpare' to true if 10 pins are hit total", function() {
      game.roll(5);
      expect(game.isSpare).toEqual(true);
    });
  });

  describe("The 'total' method", function() {
    it("should sum all the values in the 'scores' dictionary", function() {
      game.roll(5);
      game.roll(2);
      game.roll(4);
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
