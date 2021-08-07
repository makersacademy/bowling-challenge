"use strict";

describe("Frame", () => {
  let frame;

  beforeEach(() => {
    frame = new Frame();
  })

  it("records a roll", () => {
    frame.newRoll(6)
    expect(frame.rolls).toEqual([6])
  })
})
