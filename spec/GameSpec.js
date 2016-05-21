'use strict'

describe('Game', function() {

  var game
  var roll
  var pinScore

  beforeEach( function() {
    game = new Game
    roll = {
      setScore: function(value) {
        pinScore = value
      },
      score: function() {
        return pinScore
      }
    }
  })

  it('strike only stores 1 roll to a frame', function() {
    roll.setScore(10)
    game.bowl(roll)
    roll.setScore(3)
    game.bowl(roll)
    game.bowl(roll)
    expect(game.frame(1)).toEqual([roll])
    expect(game.frame(2)).toEqual([roll, roll])
  })

  it('stores rolls to a frame', function() {
    game.bowl(roll)
    game.bowl(roll)
    expect(game.frame(1)).toEqual([roll, roll])
  })

  it('increments frame number after 2 rolls', function() {
    expect(game._frameNumber).toEqual(1)
    game.bowl(roll)
    game.bowl(roll)
    expect(game._frameNumber).toEqual(2)
  })

  it('increments frame number immediately after a strike', function() {
    spyOn(roll, 'score').and.returnValue(10)
    game.bowl(roll)
    expect(game._frameNumber).toEqual(2)
  })

  it('the frame roll number is reset after each frame', function() {
    game.bowl(roll)
    game.bowl(roll)
    expect(game._frameNumber).toEqual(2)
    expect(game._frameRollNumber).toEqual(0)
  })

  it('can retrieve a rolls score by its roll number', function() {
    roll.setScore(2)
    game.bowl(roll)
    roll.setScore(4)
    game.bowl(roll)
    roll.setScore(3)
    game.bowl(roll)
    expect(game.rollNumber(1)).toEqual(2)
    expect(game.rollNumber(2)).toEqual(4)
    expect(game.rollNumber(3)).toEqual(3)
  })


})