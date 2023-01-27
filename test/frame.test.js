const Frame = require('../lib/frame')

describe('Frame', () => {
  it('returns true if strike is bowled in current turn', () => {
    let frame1 = new Frame(10,0)
    expect(frame1.checkStrike()).toEqual(true)
  })

  it('returns false if strike is not bowled in current turn', () => {
    let frame1 = new Frame(3,4)
    expect(frame1.checkStrike()).toEqual(false)
  })

  it('Returns true if frame was a spare', () => {
    let frame1 = new Frame(3, 7)
    expect(frame1.checkSpare()).toEqual(true)
  })

  it('Returns false if frame was a spare', () => {
    let frame1 = new Frame(3, 6)
    expect(frame1.checkSpare()).toEqual(false)
  })
});