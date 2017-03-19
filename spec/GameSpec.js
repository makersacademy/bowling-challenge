'use strict';

describe("BowlingGame", function() {
  var game;
  var frame;
  var frame2;

  beforeEach(function() {
    game = new Game();
    frame = new Frame(1);
  });
//
  describe("Beginning of game", function() {

    // it("instantiates a new frame", function() {
    //   expect(game.frame).toEqual(frame);
    // });

    it("has empty frames", function() {
      expect(game.frames).toEqual([]);
    });

    it("has no total score", function() {
      expect(game.totalscore).toEqual(0);
    });

    it("creates the first frame", function() {
      expect(game.newFrame).toEqual(frame);
    });

//     // it("player is able to bowl", function() {
//     //   expect(game.canBowl()).toEqual(true);
//     // });
//   });
//
  describe("Game play", function() {
//
    it("adds first bowl to frames", function() {
      frame2 = new Frame(1);
      game.addNewFrame(2, 3);
      expect(game.frames).toEqual(game)
    });

    it("adds second bowl to frames", function() {
      game.addNewFrame([2, 3]);
      // game.newFrame();
      game.addNewFrame([9, 0]);
      expect(game.frames).toEqual([[2, 3], [10, 0]])
    });
//
  });
//
//   describe("#calculateScore", function() {
//
//     it("calculates total score", function() {
//       game.addNewFrame([2, 3]);
//       game.addNewFrame([10, 0]);
//       expect(game.totalscore).toEqual(16);
//     });
  });
});
