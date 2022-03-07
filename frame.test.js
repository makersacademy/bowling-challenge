const Frame = require('./Frame');

describe('Frame class', () => {
  it('Frame starts at zero', () => {
    const frame = new Frame()
    expect(frame.getScore()).toBe(0)
  })

  it('rolls a 1', () => {
    const frame = new Frame()
    frame.roll(1)
    expect(frame.getScore()).toBe(1)
  })

  it('adds two scores together', () => {
    const frame = new Frame()
    frame.roll(1)
    frame.roll(1)
    expect(frame.getScore()).toBe(2)
  })

  it('returns true if spare', () => {
    const frame = new Frame()
    frame.roll(4)
    frame.roll(6)
    expect(frame.isSpare()).toBe(true)
  })

  it('returns true if strike', () => {
    const frame = new Frame()
    frame.roll(10)
    expect(frame.isStrike()).toBe(true)
  })

  it('returns true if frame is finished', () => {
    const frame = new Frame()
    frame.roll(4)
    frame.roll(6)
    expect(frame.isFrameFinished()).toBe(true)
  })

  it('returns false if frame is unfinished', () => {
    const frame = new Frame()
    frame.roll(4)
    expect(frame.isFrameFinished()).toBe(false)
  })  

  it('returns true if frame is finished', () => {
    const frame = new Frame()
    frame.roll(10)
    expect(frame.isFrameFinished()).toBe(true)
  })


})