/* global describe, it, expect, beforeEach */

'use strict'

describe('Final Frame', () => {
  it('a Final Frame can be assigned to a variable', () => {
    var finalFrame = new FinalFrame()
    expect(finalFrame instanceof FinalFrame).toBe(true)
  })

  describe('#roll()', () => {
    it('.roll can be called on final frame', () => {
      var finalFrame = new FinalFrame()
      expect(finalFrame.roll).toBeDefined()
    })
  })
})
