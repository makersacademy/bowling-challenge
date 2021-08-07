"use strict";

describe("Scorecard", () => {
  let scorecard;
  let frame;

  beforeEach(() => {
    frame = jasmine.createSpy("frame")
    scorecard = new Scorecard();
  }) 

  it("stores a frame", () => {
    scorecard.newFrame(frame);
    expect(scorecard.frames).toEqual([frame])
  })
})
