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
  });

  describe("The '_resolveStrikes' method", function() {
    it("should add to a frame the next two scores after a strike", function() {
      game.rollOne(10);
      game.rollOne(5);
      game.rollTwo(2);
      expect(game.scores[1]).toEqual(17);
    });
  });
});
