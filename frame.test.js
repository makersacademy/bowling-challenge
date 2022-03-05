const Frame = require('./frame');

describe('Frame',() => {
  it('records 5 when 5 pins are knocked over in first roll of frame', () => {
    const frame = new Frame();
    frame.firstRoll(5);
    expect(frame.rollOne).toBe(5)
  })
  
  it('records 5 when 5 pins are knocked over in second roll of frame', () => {
    const frame = new Frame();
    frame.secondRoll(5);
    expect(frame.rollTwo).toBe(5)
  })
})