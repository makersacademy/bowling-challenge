"use strict";

describe("Game", function () {
  var game;

  beforeEach(function () {
    game = new Game();
  });

  it("should start with a zero score", function () {
    expect(game.sumScore()).toEqual(0);
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

    it("adds a new frame after 2 rolls", function() {
      expect(game.currentFrame()).toEqual(1);
    });

    it("can sum the scores of 2 frames", function () {
      game.logRoll(1);
      game.logRoll(6);
      expect(game.sumScore()).toEqual(15);
    });
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
