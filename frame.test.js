const Frame = require('./frame');

describe('Frame',() => {
  it('returns 5 when 5 pins are knocked over in first roll of frame', () => {
    const frame = new Frame();
    frame.firstRoll(5);
    expect(frame.rollOne).toBe(5)
  })
})