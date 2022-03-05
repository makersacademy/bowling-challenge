const Frame = require('./frame');

describe('Frame',() => {
  it('records 4 when 4 pins are knocked over in first roll of frame', () => {
    let frame = new Frame();
    frame.firstRoll(4);
    expect(frame.rollOne).toBe(4)
  })
  
  it('records 6 when 6 pins are knocked over in second roll of frame', () => {
    let frame = new Frame();
    frame.secondRoll(6);
    expect(frame.rollTwo).toBe(6)
  })

  it('records the total pins knocked over a single frame', () => {
    let frame = new Frame();
    frame.firstRoll(4);
    frame.secondRoll(6);
    expect(frame.frameTotal).toBe(10)
  })
})