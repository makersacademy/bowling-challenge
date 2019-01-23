/* global describe, it, expect, beforeEach */

'use strict'

describe('Final Frame', () => {
  let finalFrame

    beforeEach(() => {
    finalFrame = new FinalFrame()
  })

  describe('#roll()', () => {
    it('throws error if NaN is input instead of number', () => {
      var error = 'Cannot record roll: roll must be an number'
      expect(function () { finalFrame.roll('hello') }).toThrow(new Error(error))
    })

    it('throws error if number rolled is less than 0', () => {
      var error = 'Cannot record roll: roll must be between 0-10'
      expect(function () { finalFrame.roll(-1) }).toThrow(new Error(error))
    })

    it('throws error if number rolled is more than 10', () => {
      var error = 'Cannot record roll: roll must be between 0-10'
      expect(function () { finalFrame.roll(11) }).toThrow(new Error(error))
    })
  })
})
