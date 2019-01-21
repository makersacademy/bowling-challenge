/* global describe, it, expect, beforeEach */
'use strict'

describe('Frame', () => {
  let frame

  beforeEach(() => {
    frame = new Frame();
    frame.roll(0)
    frame.roll(0)
  })

  describe('#gutter frame', () => {
    it('player misses the pins with 2 roles', () => {
      expect(frame._score).toEqual([0, 0])
    })
  })
})
