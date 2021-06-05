"use strict";

describe("Frame", () => {
  let frame;
  beforeEach(function () {
    frame = new Frame();
  });

  it("begins each frame with a score of 0", () => {
    expect(frame.currentScore()).toEqual(0);
  });

  it("begins each frame with no rolls", () => {
    expect(frame.rolls).toEqual([]);
  });

  it("updates its roll scores", () => {
    frame.updateRollScore(2);
    frame.updateRollScore(2);

    expect(frame.rolls).toEqual([2, 2]);
  });

  it("updates the frame score for normal scoring", () => {
    frame.updateRollScore(3);
    frame.updateRollScore(3);

    expect(frame.currentScore()).toEqual(6);
  });
});
