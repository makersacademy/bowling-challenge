'use strict'

describe('game', function(){

  var game;

  beforeEach(function(){
    game = new Game
  })

  it('stores frames as an array', function(){
    expect(game.frames).toEqual(jasmine.any(Array))
  })

  it('starts with empty frame', function(){
    expect(game.currentFrame).toEqual([])
  })

  describe('#ball1', function(){
    it('adds 1st ball score to the frame', function(){
      game.ball1(1)
      expect(game.currentFrame[0]).toEqual(1)
    })
  })

  describe('#ball2', function(){
    it('adds 2nd ball score to the frame', function(){
      game.ball1(1)
      game.ball2(2)
      expect(game.frames[0][1]).toEqual(2)
    })
    it('adds the frame to frames', function(){
      game.ball1(1)
      game.ball2(2)
      expect(game.frames[0]).toEqual([1,2])
    })
  })

  describe('#framesPlayed', function(){
    it('shows the number of frames played', function(){
      game.ball1(1)
      game.ball2(2)
      expect(game.framesPlayed()).toEqual(1)
    })
  })


})
