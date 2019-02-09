/* eslint-disable no-undef */
'use strict'

var Game = require('../src/game')

describe('Game', function () {
  var game

  beforeEach(function () {
    game = new Game()
  })

  it('scores an easy game correctly via frameAdd', function () {
    game.frameAdd([3, 3])
    game.frameAdd([3, 3])
    game.frameAdd([3, 3])
    game.frameAdd([3, 3])
    game.frameAdd([3, 3])
    game.frameAdd([3, 3])
    game.frameAdd([3, 3])
    game.frameAdd([3, 3])
    game.frameAdd([3, 3])
    game.frameAdd([3, 3])
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
    game.frameAdd([0, 0])
    game.frameAdd([0, 0])
    game.frameAdd([0, 0])
    game.frameAdd([0, 0])
    game.frameAdd([0, 0])
    game.frameAdd([0, 0])
    game.frameAdd([0, 0])
    game.frameAdd([0, 0])
    game.frameAdd([0, 0])
    game.frameAdd([0, 0])
    expect(game.frameScores).toEqual([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ])
    expect(game.totalScore).toEqual(0)
  })

  it('scores a perfect game correctly', function () {
    game.frameAdd([10, 0])
    game.frameAdd([10, 0])
    game.frameAdd([10, 0])
    game.frameAdd([10, 0])
    game.frameAdd([10, 0])
    game.frameAdd([10, 0])
    game.frameAdd([10, 0])
    game.frameAdd([10, 0])
    game.frameAdd([10, 0])
    game.frameAdd([10, 0])
    game.frameAdd([10, 10])
    console.log(game.frameScores)
    expect(game.totalScore).toEqual(300)
  })

  it('scores a game of spares game correctly', function () {
    game.frameAdd([5, 5])
    game.frameAdd([5, 5])
    game.frameAdd([5, 5])
    game.frameAdd([5, 5])
    game.frameAdd([5, 5])
    game.frameAdd([5, 5])
    game.frameAdd([5, 5])
    game.frameAdd([5, 5])
    game.frameAdd([5, 5])
    game.frameAdd([5, 5])
    game.frameAdd([5, 5])
    expect(game.frameScores).toEqual([ 15, 15, 15, 15, 15, 15, 15, 15, 15, 15 ])
    expect(game.totalScore).toEqual(150)
  })

  it('scores a game of spares game correctly', function () {
    game.frameAdd([10, 0])
    game.frameAdd([10, 0])
    game.frameAdd([5, 5])
    game.frameAdd([5, 5])
    game.frameAdd([10, 0])
    game.frameAdd([10, 0])
    game.frameAdd([5, 5])
    game.frameAdd([5, 5])
    game.frameAdd([10, 0])
    game.frameAdd([10, 0])
    game.frameAdd([10, 10])
    expect(game.frameScores).toEqual([ 30, 20, 15, 20, 30, 20, 15, 20, 20, 30 ])
    expect(game.totalScore).toEqual(220)
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
