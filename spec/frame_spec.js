/* eslint-disable no-undef */
'use strict'

var Frame = require('../src/frame.js')

describe('Frame', function () {
  var frame

  beforeEach(function () {
    frame = new Frame()
  })

  it('returns true if frame is a strike', function () {
    expect(frame.isStrike([10, 0])).toEqual(true)
  })

  it('returns false if frame is not a strike', function () {
    expect(frame.isStrike([3, 7])).toEqual(false)
  })

  it('returns true if game is a spare', function () {
    expect(frame.isSpare([3, 7])).toEqual(true)
  })

  it('returns false if game is not a spare', function () {
    expect(frame.isSpare([3, 4])).toEqual(false)
  })

  it('returns false if game is not a spare but is a strike', function () {
    expect(frame.isSpare([10, 0])).toEqual(false)
  })

  it('scores a spare followed by a spare correctly', function () {
    expect(frame.frameScore([3, 7])).toEqual(10)
  })

  it('scores a spare followed by a spare correctly', function () {
    expect(frame.spareBonus([3, 7])).toEqual(3)
  })

  it('scores a spare followed by a spare correctly', function () {
    expect(frame.strikeBonus([3, 7])).toEqual(10)
  })

})
