const Frame = require('../models/frame.js');

describe('Frame', () => {
  it("adds pins to the frame points", () => {
    frameOne = new Frame();
    frameOne.addPoints(5, 3);
    expect(frameOne.framePoints()).toEqual([5, 3, 0]);
  });

  it("given first roll is a 10 it skips the next roll", () => {
    frameOne = new Frame();
    frameOne.addPoints(10);
    expect(frameOne.framePoints()).toEqual([10, 0, 0]);
  });

  it("given first roll is a 10/strike", () => {
    frameOne = new Frame();
    frameOne.addPoints(10);
    expect(frameOne.strike()).toBe(true);
  });

  it("given first roll is a not a strike", () => {
    frameOne = new Frame();
    frameOne.addPoints(9, 1, 2);
    expect(frameOne.strike()).toBe(false);
  });

  it("given the sum of one frame = 10", () => {
    frameOne = new Frame();
    frameOne.addPoints(5, 5);
    expect(frameOne.spare()).toBe(true);
  });

  it("given the sum of one frame != 10", () => {
    frameOne = new Frame();
    frameOne.addPoints(4, 5);
    expect(frameOne.spare()).toBe(false);
  });
});