const Frame = require('../lib/frame');

describe('Frame', () => {
  let frame = new Frame;

  it('has two roll variables initially set as null', () => {
    expect(frame.firstRoll).toEqual(null);
    expect(frame.secondRoll).toEqual(null);
  });
});