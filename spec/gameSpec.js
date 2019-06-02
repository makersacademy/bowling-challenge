'use strict';
describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("Properties", function() {
    it("should have a 'scoreTotal' property which starts at 0", function() {
      expect(game.scoreTotal).toEqual(0);
    });

    it("should have a 'frameNumber' property which starts at 1", function() {
      expect(game.frameNumber).toEqual(1);
    });

    it("should have a 'scoreOne' property which starts as null", function() {
      expect(game.scoreOne).toEqual(null);
    });

    it("should have a 'scoreTwo' property which starts as null", function() {
      expect(game.scoreTwo).toEqual(null);
    });

    it("should have a 'isSpare' property which starts as false", function() {
      expect(game.isSpare).toEqual(false);
    });

    it("should have a 'isStrike' property which starts as false", function() {
      expect(game.isStrike).toEqual(false);
    });
  });

  describe("The 'rollOne' method", function() {
    it("should set given argument to the 'scoreOne' property", function() {
      game.rollOne(5);
      expect(game.scoreOne).toEqual(5);
    });

    it("should add given argument to the 'scoreTotal' property", function() {
      game.rollOne(5);
      expect(game.scoreTotal).toEqual(5);
    });

    it("should set 'isStrike' to true if 10 pins are hit", function() {
      game.rollOne(10);
      expect(game.isStrike).toEqual(true);
    });

    it("should increment 'frameNumber' by one if a strike", function() {
      game.rollOne(10);
      expect(game.frameNumber).toEqual(2);
    });
  });

  describe("The 'rollTwo' method", function() {
    it("should set given argument to the 'scoreTwo' property", function() {
      spyOn(game, "_newFrame").and.returnValue(null);
      game.rollTwo(5);
      expect(game.scoreTwo).toEqual(5);
    });

    it("should add given argument to the 'scoreTotal' property", function() {
      game.rollOne(5);
      game.rollTwo(2);
      expect(game.scoreTotal).toEqual(7);
    });

    it("should set 'isSpare' to true if 10 pins total are hit", function() {
      game.rollOne(5);
      game.rollTwo(5);
      expect(game.isSpare).toEqual(true);
    });

    it("should increment 'frameNumber' by one", function() {
      game.rollOne(5);
      game.rollTwo(2);
      expect(game.frameNumber).toEqual(2);
    });
  });

  describe("The '._newFrame' method", function() {
    it("should set 'scoreOne' to null", function() {
      game.scoreOne = 5;
      game._newFrame();
      expect(game.scoreOne).toEqual(null);
    });

    it("should set 'scoreTwo' to null", function() {
      game.scoreTwo = 5;
      game._newFrame();
      expect(game.scoreTwo).toEqual(null);
    });

    it("should increment 'frameNumber' by one", function() {
      game._newFrame();
      expect(game.frameNumber).toEqual(2);
    });
  });
});
