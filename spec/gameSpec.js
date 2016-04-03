"use strict";

describe("Game", function () {
  var game
  var frame
  var newFrame

  beforeEach(function () {
    frame = jasmine.createSpyObj("frame", ["logRoll", "isComplete", "getScore", "isStrike", "isSpare"]);
    newFrame = jasmine.createSpyObj("newFrame", ["getScore", "logRoll"]);
    game = new Game(frame);
  });

  function getAndLogScore(frame, score) {
    frame.getScore.and.returnValue(score);
    game.logFrameScore(frame);
  };

  it("should start with a zero score", function () {
    expect(game.getScore()).toEqual(0);
  });

  describe("log scores", function () {
    it("logs rolls inside each frame", function () {
      game.logRoll(3);
      expect(game.currentFrame.logRoll).toHaveBeenCalledWith(3);
    });

    it("logs the score of each frame", function () {
      getAndLogScore(frame, 8)
      expect(game.getScore()).toEqual(8);
    });
  });

  describe("add frame", function () {
    it("adds a new frame when a frame is complete", function () {
      game.addFrame(newFrame);
      expect(game.currentFrame).toEqual(newFrame);
    });
  });

  describe("add bonuses", function () {
    beforeEach(function () {
      getAndLogScore(frame, 10)
    });

    function saveAndAddFrame(frame, newFrame) {
      frame.isComplete.and.returnValue(true);
      game.saveFrame(frame);
      game.addFrame(newFrame);
    };

    describe("strike bonus", function () {
      beforeEach(function () {
        frame.isStrike.and.returnValue(true);
      });

      it("adds next frame's score as bonus when strike", function () {
        saveAndAddFrame(frame, newFrame);
        getAndLogScore(newFrame, 8);
        expect(game.getScore()).toEqual(26);
      });

      it("adds next two rolls' scores if strike again", function () {
        saveAndAddFrame(frame, frame);
        getAndLogScore(frame, 10);
        saveAndAddFrame(frame, newFrame);
        game.logRoll(4);
        getAndLogScore(newFrame, 9);
        expect(game.getScore()).toEqual(52);
      });
    });

    describe("spare bonus", function () {
      it("add next roll's score as bonus when spare",
      function () {
        frame.isSpare.and.returnValue(true);
        saveAndAddFrame(frame, newFrame);
        game.logRoll(4);
        getAndLogScore(newFrame, 8);
        expect(game.getScore()).toEqual(22);
      });
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
