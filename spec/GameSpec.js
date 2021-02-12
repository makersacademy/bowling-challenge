"use strict";

describe("Game", () => {
  var game;

  class FrameDouble {
    constructor() {
      this.knockedCallCount = 0;
      this.strikeBonusCount = 0;
      this._isInPlay = true;
      this._rolls = [];
    }
    knocked(pins) {
      this.knockedCallCount++;
      this._rolls.push(pins);
      this.frameCheck();
    }
    isInPlay() {
      return this._isInPlay;
    }
    frameCheck() {
      if (this.knockedCallCount === 2) this._isInPlay = !this._isInPlay;
    }
    isStrike() {
      return this._rolls[0] === 10;
    }
    pointBonus(pins) {
      this.strikeBonusCount++;
    }
    score() {}
    isSpare() {}
  }

  describe("constructor", () => {
    it("has property frames, with array of frame objects", () => {
      game = new Game(FrameDouble);
      expect(game.frames()).toEqual([new FrameDouble()]);
    });
  });

  describe("roll", () => {
    it("calls the knocked function on the current frame", () => {
      game = new Game(FrameDouble);
      game.roll(3);
      expect(game.frames()[0].knockedCallCount).toEqual(1);
    });

    it("adds new frame objects to the frames property appropriately", () => {
      game = new Game(FrameDouble);
      game.roll(3);
      game.roll(3);
      game.roll(3);
      expect(game.frames().length).toEqual(2);
    });

    it("awards bonus points appropriately", () => {
      game = new Game(FrameDouble);
      game.roll(10);
      game.roll(5);
      game.roll(5);
      expect(game.frames()[0].strikeBonusCount).toEqual(1);
    });
  });

  describe("total score", () => {
    it("calculates the total score of the game", () => {
      game = new Game(FrameDouble);
      var frames = [{ _score: 30 }, { _score: 10 }];
      expect(game.totalScore(frames)).toEqual(40);
    });
  });
});
