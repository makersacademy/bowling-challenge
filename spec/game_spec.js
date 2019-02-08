/* eslint-disable no-undef */
'use strict'

var Game = require('../src/game')

describe('Game', function () {
  var game

  beforeEach(function () {
    game = new Game()
  })

  // it('scores an easy game correctly', function () {
  //   expect(game.totalScore([[3, 7], [3, 7], [3, 7], [3, 7], [3, 7], [3, 7], [3, 7], [3, 7], [3, 7], [3, 7]])).toEqual(100)
  // })

  // it('scores an easy game correctly via bowl', function () {
  //   game.bowl([3, 7])
  //   game.bowl([3, 7])
  //   game.bowl([3, 7])
  //   game.bowl([3, 7])
  //   game.bowl([3, 7])
  //   game.bowl([3, 7])
  //   game.bowl([3, 7])
  //   game.bowl([3, 7])
  //   game.bowl([3, 7])
  //   game.bowl([3, 7])
  //   expect(game.score).toEqual(100)
  // })

  it('adds a frame to the game', function () {
    game.frameAdd([3, 7])
    expect(game.frameResults).toEqual[ [ 3, 7 ] ]
  })
})
