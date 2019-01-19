/* global describe, it, expect, beforeEach */
'use strict'

describe('Frame', () => {
  describe('#gutter frame', () => {
    it('player misses the pins with 2 roles', () => {
      var frame = new Frame();
      frame.roll(0)
      frame.roll(0)
      expect(frame.calculateFrameScore()).toEqual(0)
    })
  })
})
