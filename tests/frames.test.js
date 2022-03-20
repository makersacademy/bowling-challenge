const Frames = require("../lib/model/frames.js");

describe("Frame", () => {
  let frame;
  beforeEach(() => {
    frame = new Frames();
  });

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

  it("adds bonus points for strike on tenth frame", () => {
    for (let i = 0; i < 9; i++) {
      frame.createNewFrame([4, 4]);
    }
    frame.createNewFrame([10]);
    frame.createNewFrame([10]);
    frame.createNewFrame([8]);

    expect(frame.totalPoints()).toEqual(100);
  });

  it("adds bonus points for spare on tenth frame", () => {
    for (let i = 0; i < 9; i++) {
      frame.createNewFrame([4, 4]);
    }
    frame.createNewFrame([4, 6]);
    frame.createNewFrame([8]);

    expect(frame.totalPoints()).toEqual(90);
  });
});
