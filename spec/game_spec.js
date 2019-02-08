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
    expect(game.score).toEqual(60)
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
    expect(game.score).toEqual(87)
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
    expect(game.score).toEqual(87)
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
    expect(game.score).toEqual(6)
  })

  it('calculates the score on first frame strike, normal second frame', function () {
    game.frameAdd([10, 0])
    game.frameAdd([3, 3])
    expect(game.score).toEqual(22)
  })

  it('calculates the score on first frame spare, normal second frame', function () {
    game.frameAdd([3, 7])
    game.frameAdd([3, 3])
    expect(game.score).toEqual(19)
  })
})
