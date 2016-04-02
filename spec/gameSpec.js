"use strict";

describe("Game", function () {
  var game
  var frame

  beforeEach(function () {
    frame = jasmine.createSpyObj("frame", ["logRoll", "isComplete", "getScore"]);
    game = new Game(frame);
  });

  it("should start with a zero score", function () {
    expect(game.sumScore()).toEqual(0);
  });

  describe("log scores", function () {
    it("logs rolls inside each frame", function () {
      game.logRoll(3);
      expect(game.currentFrame.logRoll).toHaveBeenCalledWith(3);
    });

    it("logs the score of each frame", function () {
      frame.getScore.and.returnValue(8);
      game.logFrameScore(frame);
      expect(game.sumScore()).toEqual(8);
    });
  });

  describe("add frame", function () {
    it("adds a new frame when a frame is complete", function () {
      frame.isComplete.and.returnValue(true);
      var newFrame = jasmine.createSpy("newFrame");
      game.addFrame(newFrame);
      expect(game.currentFrame).toEqual(newFrame);
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
