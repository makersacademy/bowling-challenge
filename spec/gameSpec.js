"use strict";

describe("Game", function () {
  var game;

  beforeEach(function () {
    game = new Game();
  });

  it("should start with a zero score", function () {
    expect(game.sumScore()).toEqual(0);
  });

  describe("rolls", function () {
    it("starts with the first roll", function () {
      expect(game.isFirstRoll(0)).toEqual(true);
    });

    it("has a second roll", function () {
      game.logRoll(2);
      expect(game.isFirstRoll(0)).toEqual(false);
    });
  });

  describe("frames", function () {
    it("adds a new frame after 2 rolls", function() {
      game.logRoll(2);
      game.logRoll(4);
      expect(game.currentFrame()).toEqual(1);
    });

    it("each roll can only hit 10 pins maximum", function () {
      expect(function () { game.logRoll(11) }).toThrowError(game.PINS_ERROR)
    });

    it("there are only 10 pins for 2 rolls", function () {
      game.logRoll(3);
      expect(function () { game.logRoll(8) }).toThrowError(game.PINS_ERROR)
    });
  });

  describe("Gutter Game", function () {
    it("can calculate a Gutter Game", function () {
      for (var i = 1; i <= 20; i ++) {
        game.logRoll(0);
      };
      expect(game.sumScore()).toEqual(0);
    });
  });

  describe("no strikes or spares", function () {
    beforeEach(function () {
      game.logRoll(3);
      game.logRoll(5);
    });

    it("can sum the scores of one frame", function () {
      expect(game.sumScore()).toEqual(8);
    });

    it("can sum the scores of 2 frames", function () {
      game.logRoll(1);
      game.logRoll(6);
      expect(game.sumScore()).toEqual(15);
    });
  });

  describe("strikes", function () {

  });


  describe("Perfect Game", function () {
    xit("can calculate a Perfect Game", function () {
      for (var i = 1; i <= 12; i++) {
        game.logRoll(10);
      };
      expect(game.getScore()).toEqual(300);
    });
  });
});
