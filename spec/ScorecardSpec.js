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
  });
});
