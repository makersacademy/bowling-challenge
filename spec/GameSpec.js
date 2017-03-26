'use strict';

describe("BowlingGame", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("Beginning of game", function() {

    it("has empty frames", function() {
      expect(game.frames).toEqual([]);
    });

    it("has no total score", function() {
      expect(game.totalscore).toEqual(0);
    });

    it("player is able to bowl", function() {
      expect(game._canBowl()).toEqual(true);
    });
  });

  describe("Game play", function() {

    it("adds bowls to frames", function() {
      game.addNewFrame(2, 3);
      game.addNewFrame(9, 0);
      expect(game.frames[0].totalFrame).toEqual([2, 3])
      expect(game.frames[1].totalFrame).toEqual([9, 0])
    });

  //   it("wont allow more than 10 bowls")
  //   game.addNewFrame(2, 3);
  //   game.addNewFrame(9, 0);
  //   game.addNewFrame(2, 3);
  //   game.addNewFrame(9, 0);
  //   game.addNewFrame(2, 3);
  //   game.addNewFrame(9, 0);
  //   game.addNewFrame(2, 3);
  //   game.addNewFrame(9, 0);
  //   game.addNewFrame(2, 3);
  //   game.addNewFrame(9, 0);
  //   expect(game.addNewFrame).to
  });

  describe("#calculateScore", function() {

    it("calculates a gutter game", function() {
      game.addNewFrame(0, 0);
      game.addNewFrame(0, 0);
      expect(game.calculateScore()).toEqual(0);
    });

    it("calculates a normal game", function() {
      game.addNewFrame(2, 3);
      game.addNewFrame(9, 0);
      game.addNewFrame(3, 6);
      expect(game.calculateScore()).toEqual(23);
    });

    xit ("calculates a game with spares", function() {
      game.addNewFrame(2, 8);
      game.addNewFrame(4, 3);
      expect(game.calculateScore()).toEqual(14);
    });
  });
});
