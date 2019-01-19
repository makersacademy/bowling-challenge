/* global describe, it, expect, beforeEach */

'use strict'

describe('Frame', () => {
  describe('#roll()', () => {
    it('responds to .roll()', () => {
      var frame = new Frame()
      expect(frame.roll).toBeDefined()
    })
  })

  describe('#score()', () => {
    it('responds to .score()', () => {
      var frame = new Frame()
      expect(frame.score).toBeDefined()
    })
  })
})
