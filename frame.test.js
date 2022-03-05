const Frame = require('./frame');

describe('Frame',() => {
  it('returns 5 when 5 pins are knocked over in first roll of frame', () => {
    const frame = new Frame();
    expect(frame.first_roll(5)).toBe(5)
  })
})