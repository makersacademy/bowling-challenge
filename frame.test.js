const Frame = require('./frame');

describe('Frame class', () => {
  const newFrame = new Frame;

  it('creates a new frame', () => {
    expect(new Frame).toBeInstanceOf(Frame);
  });
});
