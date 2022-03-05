const Frame = require('./frame');

describe('Frame',() => {
  it('records 4 when 4 pins are knocked over in first roll of frame', () => {
    let frame = new Frame();
    frame.firstRoll(4);
    expect(frame.rollOne[0]).toBe(4)
  })
  
  it('records 6 when 6 pins are knocked over in second roll of frame', () => {
    let frame = new Frame();
    frame.secondRoll(6);
    expect(frame.rollTwo[0]).toBe(6)
  })

  it('records the total pins knocked over a single frame', () => {
    let frame = new Frame();
    frame.firstRoll(4);
    frame.secondRoll(6);
    expect(frame.frameTotal[0]).toBe(10)
  })

  it('resets the scores for next frame', () => {
    let frame = new Frame();
    frame.firstRoll(4);
    expect(frame.rollOne[0]).toBe(4)
    frame.secondRoll(6);
    expect(frame.rollTwo[0]).toBe(6)
    expect(frame.frameTotal[0]).toBe(10)
    expect(frame.rollOne[1]).toBe(0)
    expect(frame.rollTwo[1]).toBe(0)
  })

  it('records a strike bonus when 10 pins are knocked over in first roll of frame', () => {
    let frame = new Frame();
    frame.firstRoll(10);
    expect(frame.frameBonus[0]).toBe("Strike")
  })

})