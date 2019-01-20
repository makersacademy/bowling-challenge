/* global describe, it, expect, beforeEach */
'use strict'

describe('Frame', () => {
  describe('#gutter frame', () => {
    it('player misses the pins with 2 roles', () => {
      var frame = new Frame();
      frame.roll(0)
      frame.roll(0)
      expect(frame._score).toEqual([0, 0])
    })

    it('maximum rolls per frame is 2', () => {
      var frame = new Frame();
      frame.roll(0)
      frame.roll(0)
      var error = 'Cannot record 2 rolls: maximum rolls per frame is 2'
      expect(function() { frame.roll(0) }).toThrow(new Error(error))
    })
  })
})
