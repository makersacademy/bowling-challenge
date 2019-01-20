/* global describe, it, expect, beforeEach */

'use strict'

describe('Frame', () => {
  let frame;

  beforeEach(() => {
    frame = new Frame();
    frame.roll(0)
    frame.roll(0)
  })

  describe('#roll()', () => {
    it('maximum rolls per frame is 2', () => {
      var error = 'Cannot record 2 rolls: maximum rolls per frame is 2'
      expect(function() { frame.roll(0) }).toThrow(new Error(error))
    })
  })
})
