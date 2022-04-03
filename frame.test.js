const Frame = require("./frame");

describe('Frame', () => {
 it('calculates the sum of the first and second roll', () => {
    frame = new Frame(1, 7);
    expect(frame.frameTotal).toEqual(8);
  });
});