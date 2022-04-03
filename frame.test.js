const Frame = require("./frame");

describe('Frame', () => {
 it('frame starts at score equalling 0', () => {
    frame = new Frame();
    expect(frame.score).toEqual(0);
  });
});