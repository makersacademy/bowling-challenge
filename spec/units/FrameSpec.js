/* global describe, it, expect, beforeEach */

'use strict'

describe('Frame', () => {
  let frame;

  beforeEach(() => {
    frame = new Frame();
  })

  describe('#roll()', () => {
    it('responds to .roll()', () => {
      expect(frame.roll).toBeDefined()
    })
  })

  describe('#calculateFrameScore()', () => {
    it('returns 0 after player rolls two gutter balls', () => {
      frame.roll(0)
      frame.roll(0)
      expect(frame.calculateFrameScore()).toEqual(0)
    })
  })
})
