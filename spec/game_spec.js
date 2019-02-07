/* eslint-disable no-undef */
'use strict'

var Game = require('../src/game')

describe('Game', function () {
  var game

  beforeEach(function () {
    game = new Game()
  })

  it('scores an easy frame correctly', function () {
    frame.bowl(3, 4)
    frame.bowl(0, 0)
    expect(frame.scoreFrame(1)).toEqual(7)
  })

  it('scores a pair of easy frames correctly', function () {
    frame.bowl(3, 4)
    frame.bowl(3, 4)
    expect(frame.scoreFrame(1)).toEqual(7)
  })

  it('scores a strike followed by an easy frame correctly', function () {
    frame.bowl(10, 0)
    frame.bowl(3, 4)
    expect(frame.scoreFrame(1)).toEqual(17)
  })

  it('scores a spare followed by an easy frame correctly', function () {
    frame.bowl(3, 7)
    frame.bowl(3, 4)
    expect(frame.scoreFrame(1)).toEqual(13)
  })

  it('scores a strike followed by a strike correctly', function () {
    frame.bowl(10, 0)
    frame.bowl(10, 0)
    expect(frame.scoreFrame(1)).toEqual(20)
  })

  it('scores a spare followed by a spare correctly', function () {
    frame.bowl(3, 7)
    frame.bowl(3, 7)
    expect(frame.scoreFrame(1)).toEqual(13)
  })
})
