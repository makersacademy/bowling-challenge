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
})
