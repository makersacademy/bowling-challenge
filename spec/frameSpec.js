'use strict'

describe('Frame', () => {
  let frame
  beforeEach(function () {
    frame = new Frame()
  })

  it('begins each frame with a score of 0', () => {
    expect(frame.currentScore()).toEqual(0)
  })

  it('begins each frame with no rolls', () => {
    expect(frame.rolls).toEqual([0])
  })

  it('updates the frame score for normal scoring', () => {
    frame.rolls.push(2)
    frame.rolls.push(2)

    expect(frame.currentScore()).toEqual(4)
  })

  it('updates the roll scores', () => {
    frame.updateRollScore(2)
    frame.updateRollScore(2)

    expect(frame.rolls).toEqual([0, 2, 2])
  })
})
