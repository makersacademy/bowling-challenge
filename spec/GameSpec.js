'use strict'

describe('Game', function() {

  var game
  var roll
  var roll2
  var pinScore
  var pinScore2

  beforeEach( function() {
    game = new Game
    roll = {
      setScore: function(value) {
        pinScore = value
      },
      score: function() {
        return pinScore
      },
      isStrike: function() {
        return value
      },
      setRollNumber: function(value) {
        return value
      }
    }
    roll2 = {
      setScore: function(value) {
        pinScore2 = value
      },
      score: function() {
        return pinScore2
      }
    }
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

  it('can calculate the total score of every roll to that point', function() {
    roll.setScore(2)
    for (var i = 0; i < 4; i++) {
      game.bowl(roll)
    }
    roll.setScore(4)
    for (var i = 0; i < 6; i++) {
      game.bowl(roll)
    }
    expect(game.totalScore()).toEqual(32)
  })

  it("can calculate the score of each individual frame", function() {
    roll.setScore(2)
    for (var i = 0; i < 7; i++) {
      game.bowl(roll)
    }
    expect(game.frameScore(3)).toEqual(4)
    roll2.setScore(4)
    for (var i = 0; i < 5; i++) {
      game.bowl(roll2)
    }
    expect(game.frameScore(4)).toEqual(6)
  })

  describe('Strike', function() {
    it('frame score gets a bonus of the score from next 2 rolls', function() {
      spyOn(roll, 'isStrike').and.returnValue(true)
      game.bowl(roll)
      roll2.setScore(3)
      game.bowl(roll2)
      game.bowl(roll2)
      expect(game.frameScore(1)).toEqual(16)
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
  })




})