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

  it('scores an easy frame correctly', function () {
    expect(frame.scoreFrame([3, 4], [0, 0])).toEqual(7)
  })

  it('scores a pair of easy frames correctly', function () {
    expect(frame.scoreFrame([3, 4], [3, 3])).toEqual(7)
  })

  it('scores a strike followed by an easy frame correctly', function () {
    expect(frame.scoreFrame([10, 0], [3, 4])).toEqual(17)
  })

  it('scores a spare followed by an easy frame correctly', function () {
    expect(frame.scoreFrame([3, 7], [3, 4])).toEqual(13)
  })

  it('scores a strike followed by a strike correctly', function () {
    expect(frame.scoreFrame([10, 0], [10, 0])).toEqual(20)
  })

  it('scores a spare followed by a spare correctly', function () {
    expect(frame.scoreFrame([3, 7], [3, 7])).toEqual(13)
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
