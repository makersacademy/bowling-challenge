/* eslint-disable no-undef */
'use strict'

var Game = require('../src/game')

describe('Game', function () {
  var game
  var i

  beforeEach(function () {
    game = new Game()
  })

  it('scores an easy game correctly via frameAdd', function () {
    for (i = 0; i < 10; i++) {
      game.frameAdd([3, 3])
    }
    expect(game.frameScores).toEqual([ 6, 6, 6, 6, 6, 6, 6, 6, 6, 6 ])
    expect(game.totalScore).toEqual(60)
  })

  it('scores a game with strikes and spares correctly via frameAdd', function () {
    game.frameAdd([3, 3])
    game.frameAdd([3, 3])
    game.frameAdd([3, 7])
    game.frameAdd([3, 3])
    game.frameAdd([10, 0])
    game.frameAdd([3, 3])
    game.frameAdd([10, 0])
    game.frameAdd([3, 3])
    game.frameAdd([3, 3])
    game.frameAdd([3, 3])
    expect(game.frameScores).toEqual([ 6, 6, 13, 6, 16, 6, 16, 6, 6, 6 ])
    expect(game.totalScore).toEqual(87)
  })

  it('scores a game with strikes and spares in end game correctly via frameAdd', function () {
    game.frameAdd([3, 3])
    game.frameAdd([3, 3])
    game.frameAdd([3, 7])
    game.frameAdd([3, 3])
    game.frameAdd([10, 0])
    game.frameAdd([3, 3])
    game.frameAdd([10, 0])
    game.frameAdd([3, 3])
    game.frameAdd([3, 3])
    game.frameAdd([10, 0])
    game.frameAdd([5, 5])
    expect(game.frameScores).toEqual([ 6, 6, 13, 6, 16, 6, 16, 6, 6, 20 ])
    expect(game.totalScore).toEqual(101)
  })

  it('scores a gutter game correctly', function () {
    for (i = 0; i < 10; i++) {
      game.frameAdd([0, 0])
    }
    expect(game.frameScores).toEqual([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ])
    expect(game.totalScore).toEqual(0)
  })

  it('scores a perfect game correctly', function () {
    for (i = 0; i < 10; i++) {
      game.frameAdd([10, 0])
    }
    game.frameAdd([10, 10])
    expect(game.frameScores).toEqual([ 30, 30, 30, 30, 30, 30, 30, 30, 30, 30 ])
    expect(game.totalScore).toEqual(300)
  })

  it('scores a game of spares game correctly', function () {
    for (i = 0; i < 11; i++) {
      game.frameAdd([5, 5])
    }
    expect(game.frameScores).toEqual([ 15, 15, 15, 15, 15, 15, 15, 15, 15, 15 ])
    expect(game.totalScore).toEqual(150)
  })

  it('scores the example correctly', function () {
    game.frameAdd([1, 4])
    game.frameAdd([4, 5])
    game.frameAdd([6, 4])
    game.frameAdd([5, 5])
    game.frameAdd([10, 0])
    game.frameAdd([0, 1])
    game.frameAdd([7, 3])
    game.frameAdd([6, 4])
    game.frameAdd([10, 0])
    game.frameAdd([2, 8])
    game.frameAdd([6, 0])
    expect(game.frameScores).toEqual([ 5, 9, 15, 20, 11, 1, 16, 20, 20, 16 ])
    expect(game.totalScore).toEqual(133)
  })

  it('adds a frame to the game', function () {
    game.frameAdd([3, 7])
    expect(game.frameResults).toEqual([ [ 3, 7 ] ])
  })

  it('increments the frame counter', function () {
    game.frameAdd([3, 7])
    expect(game.frameNumber).toEqual(1)
  })

  it('calculates the score on first frame', function () {
    game.frameAdd([3, 3])
    expect(game.totalScore).toEqual(6)
  })

  it('calculates the score on first frame strike, normal second frame', function () {
    game.frameAdd([10, 0])
    game.frameAdd([3, 3])
    expect(game.totalScore).toEqual(22)
  })

  it('calculates the score on first frame spare, normal second frame', function () {
    game.frameAdd([3, 7])
    game.frameAdd([3, 3])
    expect(game.totalScore).toEqual(19)
  })
})
