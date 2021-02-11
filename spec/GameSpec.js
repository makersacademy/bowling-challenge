"use strict";

describe("Game", () => {
  var game;

  class FrameDoubleInPlay {
    constructor() {
      this.knockedCallCount = 0;
    }
    knocked(pins) {
      this.knockedCallCount++;
    }
    isInPlay() {
      return true;
    }
    score() {}
    isStrike() {}
    isSpare() {}
  }

  class FrameDoubleNotInPlay {
    constructor() {
      this.knockedCallCount = 0;
      this.strikeCallCount = 0;
      this.spareCallCount = 0;
    }
    knocked(pins) {
      this.knockedCallCount++;
    }
    isInPlay() {
      return false;
    }
    score() {}
    isStrike() {}
    isSpare() {}
  }

  describe("constructor", () => {
    it("has property frames, with array of frame objects", () => {
      game = new Game(FrameDoubleInPlay);
      expect(game.frames()).toEqual([new FrameDoubleInPlay()]);
    });
  });

  describe("roll", () => {
    it("calls the knocked function on the current frame", () => {
      game = new Game(FrameDoubleInPlay);
      game.roll(3);
      expect(game.frames()[0].knockedCallCount).toEqual(1);
    });

    it("adds new frame objects to the frames property appropriately", () => {
      game = new Game(FrameDoubleNotInPlay);
      game.roll(3);
      expect(game.frames().length).toEqual(2);
    });

    xit("awards bonus points appropriately", () => {
      game = new Game(FrameDoubleNotInPlay);
      expect(game.frames()[0].strikeCallCount).toEqual(1);
    });
  });

  describe("total score", () => {
    it("calculates the total score of the game", () => {
      var frames = [{ _score: 30 }, { _score: 10 }];
      expect(game.totalScore(frames)).toEqual(40);
    });
  });
});
