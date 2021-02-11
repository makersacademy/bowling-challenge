"use strict";

describe("Game", () => {
  var frameDouble;
  var game;

  class FrameDouble {
    kocked() {}
    isInPlay() {}
    score() {}
    isStrike() {}
    isSpare() {}
  }

  // beforeEach(() => {
  //   game = new Game(FrameDouble);
  // });

  describe("constructor", () => {
    it("has property frames, with array of frame objects", () => {
      game = new Game(FrameDouble);
      expect(game.frames()).toEqual([new FrameDouble()]);
    });
  });

  describe("roll", () => {
    it("calls the knocked function on the current frame", () => {
      game = new Game(FrameDouble);
      game.currentFrame().returnValue(new FrameDouble());
      game.roll(3);
      expect(game.frames().knocked).toHaveBeenCalled();
    });

    it("adds new frame objects to the frames property appropriately", () => {
      Frame.isInPlay.and.returnValue(false);
      game.roll(3);
      expect(game.frames().length).toEqual(2);
    });

    xit("awards bonus points appropriately", () => {});
  });

  describe("total score", () => {
    it("calculates the total score of the game", () => {
      var frames = [{ _score: 30 }, { _score: 10 }];
      expect(game.totalScore(frames)).toEqual(40);
    });
  });
});
