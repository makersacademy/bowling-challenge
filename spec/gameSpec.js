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

    it("should have a 'scoreOne' property set to null", function() {
      expect(game.scoreOne).toEqual(null);
    });

    it("should have a 'scoreTwo' property set to null", function() {
      expect(game.scoreTwo).toEqual(null);
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

  describe("The 'rollOne' method", function() {
    it("should set 'scoreOne' to its argument", function() {
      game.rollOne(5);
      expect(game.scoreOne).toEqual(5);
    });

    it("should push argument to 'allRolls' array", function() {
      game.rollOne(5);
      expect(game.allRolls).toEqual([5]);
    });

    it("should create a key-value pair in 'scores'",function() {
      game.rollOne(5);
      expect(game.scores).toEqual({ 1: 5 })
    });

    it("should start a new frame if a strike", function() {
      game.rollOne(10);
      expect(game.frame).toEqual(2);
      expect(game.scoreOne).toEqual(null);
    });

    it("should push to 'activeStrikes' array if a strike", function() {
      game.rollOne(10);
      expect(game.activeStrikes).toEqual([[1, 0]]);
    });
  });

  describe("The 'rollTwo' method", function() {
    beforeEach(function() {
      game.rollOne(5);
    });

    it("should set 'scoreTwo' to its argument", function() {
      spyOn(game, "_newFrame").and.returnValue(null);
      game.rollTwo(5);
      expect(game.scoreTwo).toEqual(5);
    });

    it("should push argument to 'allRolls' array", function() {
      game.rollTwo(5);
      expect(game.allRolls).toEqual([5, 5]);
    });

    it("should add pins to the correct frame value in 'scores'", function() {
      game.rollTwo(4);
      expect(game.scores).toEqual({1: 9});
    });

    it("should start a new frame", function() {
      game.rollTwo(5);
      expect(game.frame).toEqual(2);
      expect(game.scoreOne).toEqual(null);
      expect(game.scoreTwo).toEqual(null);
    });

    it("should set 'isSpare' to true if 10 pins are hit total", function() {
      game.rollTwo(5);
      expect(game.isSpare).toEqual(true);
    });
  });

  describe("The 'total' method", function() {
    it("should sum all the values in the 'scores' dictionary", function() {
      game.rollOne(5);
      game.rollTwo(2);
      game.rollOne(4);
      expect(game.total()).toEqual(11);
    });
  });

  describe("The '_resolveStrikes' method", function() {
    it("should add to a frame the next two scores after a strike", function() {
      game.rollOne(10);
      game.rollOne(5);
      game.rollTwo(2);
      expect(game.scores[1]).toEqual(17);
    });
  });

  describe("The '_resolveSpare' method", function() {
    beforeEach(function() {
      game.rollOne(5);
      game.rollTwo(5);
      game.rollOne(5);
      game.rollTwo(3);
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
        game.rollOne(10);
      }

      expect(game.scores[10]).toEqual(30);
      expect(game.total()).toEqual(300);
    });
  });

  describe("A 'Gutter Game'", function() {
    it("20 rolls of 0 should score 0", function() {
      var i;
      for (i = 0; i < 12; i++) {
        game.rollOne(0);
        game.rollTwo(0);
      }
      expect(game.total()).toEqual(0);
    });
  });
});
