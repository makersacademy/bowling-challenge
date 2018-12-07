"use strict"

describe("Scorecard", function() {
  var scorecard;
  beforeEach(function() {
    scorecard = new Scorecard;
  });

  it("starts at Frame 1, Roll 1", function() {
    expect(scorecard.currentFrame).toEqual(1);
    expect(scorecard.currentRoll).toEqual(1);
  });

  describe("recording scores", function() {
    it("returns the score of the first roll", function() {
      scorecard.recordScore(5);
      expect(scorecard.readScores(1, 1)).toEqual(5);
    });
    it("returns the score of the second roll", function() {
      scorecard.recordScore(5);
      scorecard.recordScore(3);
      expect(scorecard.readScores(1, 2)).toEqual(3);
    });
    it("does not allow a frame total greater than 10", function() {
      var outOfPins = "Frame total would exceed 10";
      scorecard.recordScore(6);
      expect(function() {scorecard.recordScore(5)}).toThrow(outOfPins);
    });

    describe("recording to the correct frame", function() {
      it("goes to the next frame after 2 rolls", function() {
        scorecard.recordScore(5);
        scorecard.recordScore(3);
        scorecard.recordScore(7);
        expect(scorecard.readScores(2, 1)).toEqual(7);
      });
      it("goes straight to the next frame after a strike", function() {
        scorecard.recordScore(10);
        scorecard.recordScore(6);
        expect(scorecard.readScores(2, 1)).toEqual(6);
      });
    });
  });

  describe("scoring frames", function() {
    it("returns the partial frame score after 1 roll", function() {
      scorecard.recordScore(5);
      expect(scorecard.frameScore(1)).toEqual(5);
    });
    it("returns the total frame score after 2 rolls", function() {
      scorecard.recordScore(4);
      scorecard.recordScore(3);
      expect(scorecard.frameScore(1)).toEqual(7);
    });
    it("returns a score from earlier than the current frame", function() {
      scorecard.recordScore(2);
      scorecard.recordScore(6);
      scorecard.recordScore(5);
      expect(scorecard.frameScore(1)).toEqual(8);
    });
  });

  describe("strikes", function() {
    it("reserves space for the bonus", function() {
      scorecard.recordScore(10);
      expect(scorecard.readScores(1,3)).toEqual("S");
    });
    it("returns the score including bonuses after 2 rolls", function() {
      scorecard.recordScore(10);
      scorecard.recordScore(4);
      scorecard.recordScore(3);
      expect(scorecard.frameScore(1)).toEqual(17);
    });
  });

  describe("spares", function() {
    it("reserves space for the bonus", function() {
      scorecard.recordScore(4);
      scorecard.recordScore(6);
      expect(scorecard.readScores(1,3)).toEqual("sp");
    });
    it("returns the score including bonuses after 1 roll", function() {
      scorecard.recordScore(4);
      scorecard.recordScore(6);
      scorecard.recordScore(3);
      expect(scorecard.frameScore(1)).toEqual(13);
    });
  });

  describe("after the tenth frame", function() {
    it("does not accept regular scores after the 10th frame", function() {
      var gameOver = "All frames have been completed";
      for(var i=1; i<=20; i++) {
        scorecard.recordScore(0);
      }
      expect(function() {scorecard.recordScore(5)}).toThrow(gameOver);
    });
    it("allows rolling for strike bonuses and records them", function() {
      var gameOver = "All frames have been completed";
      for(var i=1; i<=10; i++) {
        scorecard.recordScore(10);
      }
      scorecard.recordScore(4);
      scorecard.recordScore(6);
      expect(scorecard.frameScore(10)).toEqual(20);
      expect(function() {scorecard.recordScore(0)}).toThrow(gameOver);
    });
    it("allows rolling for spare bonuses and records them", function() {
      var gameOver = "All frames have been completed";
      for(var i=1; i<=9; i++) {
        scorecard.recordScore(10);
      }
      scorecard.recordScore(9);
      scorecard.recordScore(1);
      scorecard.recordScore(10);
      expect(scorecard.frameScore(10)).toEqual(20);
      expect(function() {scorecard.recordScore(0)}).toThrow(gameOver);
    });
  });

  describe("calculating the overall total score", function() {
    it("returns the total score for all frames", function() {
      for(var i=1; i<=10; i++) {
        scorecard.recordScore(4);
        scorecard.recordScore(5);
      }
      expect(scorecard.totalScore()).toEqual(90);
    });
    it("ignores incomplete frames", function() {
      scorecard.recordScore(4);
      expect(scorecard.totalScore()).toEqual(0);
    });
    it("ignores frames that area waiting for bonuses", function() {
      scorecard.recordScore(10);
      expect(scorecard.totalScore()).toEqual(0);
      scorecard.recordScore(4);
      scorecard.recordScore(6);
      expect(scorecard.totalScore()).toEqual(20);
      scorecard.recordScore(3);
      expect(scorecard.totalScore()).toEqual(33);
    });
  });
});
