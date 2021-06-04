'use strict'

describe('Frame', () => {
  let frame
  beforeEach(function () {
    frame = new Frame()
  })

  it('begins each frame with a score of 0', () => {
    expect(frame.currentScore()).toEqual(0)
  })
})
