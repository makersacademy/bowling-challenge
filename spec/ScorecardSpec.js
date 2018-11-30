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
    it("does not allow a frame total greater than 10", function() {
      var outOfPins = "Frame total would exceed 10";
      scorecard.recordScore(6);
      expect(function() {scorecard.recordScore(5)}).toThrow(outOfPins);
    });
    it("does not accept more scores after the 10th frame", function() {
      var gameOver = "All frames have been completed";
      for(var i=1; i<10; i++) {
        scorecard.recordScore(10);
      }
      scorecard.recordScore(0);
      scorecard.recordScore(0);
      expect(function() {scorecard.recordScore(5)}).toThrow(gameOver);
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
    it("returns the score for an earlier strike", function() {
      scorecard.recordScore(10);
      scorecard.recordScore(5);
      expect(scorecard.frameScore(1)).toEqual(10);
    });
  });
});
