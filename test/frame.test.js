const Frame = require('../lib/frame')

describe('Frame', () => {
  it('adds two rolls to the frame', () => {
    let frame1 = new Frame()
    frame1.addRollsToFrame(5, 6)
    expect(frame1.frame).toEqual([5, 6])
  })

  it('returns true if a strike is bowled', () => {
    let frame1 = new Frame()
    frame1.addRollsToFrame(10, 0)
    expect(frame1.checkStrike()).toEqual(true)
  })

  it('returns false if a strike is bowled', () => {
    let frame1 = new Frame()
    frame1.addRollsToFrame(5, 3)
    expect(frame1.checkStrike()).toEqual(false)
  })

  it('returns true if a spare is bowled', () => {
    let frame1 = new Frame()
    frame1.addRollsToFrame(5, 5)
    expect(frame1.checkSpare()).toEqual(true)
  })

  it('returns false if a spare is not bowled', () => {
    let frame1 = new Frame()
    frame1.addRollsToFrame(5, 4)
    expect(frame1.checkSpare()).toEqual(false)
  })

  it('returns the sum of the frame', () => {
    let frame1 = new Frame()
    frame1.addRollsToFrame(5, 4)
    expect(frame1.frameSum()).toEqual(9)
  })
});