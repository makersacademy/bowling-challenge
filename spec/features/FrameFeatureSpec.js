/* global describe, it, expect, beforeEach */
'use strict'

describe('Frame', () => {
  describe('#gutter frame', () => {
    it('player misses the pins with 2 roles', () => {
      var frame = new Frame();
      frame.firstRoll(0)
      frame.secondRoll(0)
      expect(frame.score).toEqual(0)
    })
  })
})
