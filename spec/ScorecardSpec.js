"use strict";

describe("Scorecard:", function() {
  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  it("can add a frame", function() {
    scorecard.addFrame([]);
    expect(scorecard.getFrames()).toEqual([[]]);
  });
});
