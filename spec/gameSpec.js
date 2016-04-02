"use strict";

describe("Game", function () {
  var game
  var frame

  beforeEach(function () {
    frame = jasmine.createSpyObj("frame", ["logRoll", "isComplete", "getScore", "isStrike"]);
    game = new Game(frame);
  });

  it("should start with a zero score", function () {
    expect(game.getScore()).toEqual(0);
  });

  describe("log scores", function () {
    it("logs rolls inside each frame", function () {
      game.logRoll(3);
      expect(game.currentFrame.logRoll).toHaveBeenCalledWith(3);
    });

    it("logs the score of each frame", function () {
      frame.getScore.and.returnValue(8);
      game.logFrameScore(frame);
      expect(game.getScore()).toEqual(8);
    });
  });

  describe("add frame", function () {
    it("adds a new frame when a frame is complete", function () {
      var newFrame = jasmine.createSpy("newFrame");
      game.addFrame(newFrame);
      expect(game.currentFrame).toEqual(newFrame);
    });
  });

  describe("add bonus", function () {
    xit("adds next frame's score as bonus when strike", function () {

    });

    xit("add next roll's score as bonus when spare",
  function () {

    });
  });

  describe("game over", function () {
    it("game is over after 10 frames", function () {
      for (var i = 1; i <= 10; i ++) {
        frame.isComplete.and.returnValue(true);
        game.saveFrame(frame);
      }
      expect(game.isOver()).toEqual(true);
    });
  });
});
