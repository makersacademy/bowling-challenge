/* global describe, it, expect, beforeEach */

'use strict'

describe('Frame', () => {
  let frame;

  beforeEach(() => {
    frame = new Frame();
  })

  describe('#roll()', () => {
    it('throws error if more than 2 rolls attempted in a frame', () => {
      frame.roll(0)
      frame.roll(0)
      var error = 'Cannot record more rolls: maximum rolls per frame is 2'
      expect(function() { frame.roll(0) }).toThrow(new Error(error))
    })

    it('throws error if NaN is input instead of number', () => {
      var error = 'Cannot record roll: roll must be an number'
      expect(function() { frame.roll('hello') }).toThrow(new Error(error))
    })

    it('throws error if number rolled is less than 0', () => {
      var error = 'Cannot record roll: roll must be between 0-10'
      expect(function() { frame.roll(-1) }).toThrow(new Error(error))
    })

    it('throws error if number rolled is more than 10', () => {
      var error = 'Cannot record roll: roll must be between 0-10'
      expect(function() { frame.roll(11) }).toThrow(new Error(error))
    })
  })
})
