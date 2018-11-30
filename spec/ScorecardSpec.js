"use strict"

describe("Scorecard", function() {
  it("starts at Frame 1, Roll 1", function() {
    var scorecard = new Scorecard;
    expect(scorecard.currentFrame).toEqual(1);
    expect(scorecard.currentRoll).toEqual(1);
  });
});
