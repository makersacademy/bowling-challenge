const Frame = require("./frame.js");

describe("Frame", () => {
  let frame;
  beforeEach(() => { frame = new Frame });

  it("adds rolls points to frame's total points", () => {
    frame.createNewFrame([3, 4]);

    expect(frame.totalPoints()).toEqual(7);
  });

  it("adds bonus points if previous frame was strike", () => {
    frame.createNewFrame([10]);
    frame.createNewFrame([3, 4]);

    expect(frame.totalPoints()).toEqual(24);
  });

  it("adds bonus points if previous frame was a spare", () => {
    frame.createNewFrame([6, 4]);
    frame.createNewFrame([3, 4]);

    expect(frame.totalPoints()).toEqual(20);
  });
});