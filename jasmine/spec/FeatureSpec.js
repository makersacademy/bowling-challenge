'use strict'

describe('Features', function () {
  let game
  let frame

  beforeEach(function () { 
    game = new Game()
    frame = new Frame()
  })

  describe('frames', function () {
  // As a player, so that I know how long the game is, I want to see how many frames the game has
    it('shows the number of frames of a game', function () {
      expect(game.getNumberOfFrames()).toBeGreaterThan(0)
    })
  // As a player, so I know how many frames I have already played, I want to know which frame I'm currently playing
    it('shows the number of the current frame of a game', function () {
      expect(game._frames.length).toEqual(jasmine.any(Number))
    })

  })
// As a player, to be assigned a score, I want to be able to record the number of pins I hit in each roll in the correct frame
  describe('regular rolls', function () {
    it('allows the player to record the number of pins hit for each roll', function () {
      game.enterDroppedPins(5)
      expect(game._frames[0].getRolls()).toEqual([5])
    })
  })

// As a player, so I don't have to remember the number of pins I've previously hit, I want to see the history of my previous rolls.
  describe('pin history', function () {
    it('allows the player to see the history of previous rolls', function () {
      game.enterDroppedPins(5)
      game.enterDroppedPins(5)
      game.enterDroppedPins(4)
      game.enterDroppedPins(2)
      expect(game.getDroppedPins()).toEqual([[5, 5], [4, 2]])
    })
    
  })
// As a player, so that I know who's winnig the game, I want to see my running score (the sum of the score of all my rolls)
  describe('current score', function () {
    it('allows the player to see their running score', function () {
      game.enterDroppedPins(4)
      game.enterDroppedPins(5)
      game.enterDroppedPins(4)
      game.enterDroppedPins(2)
      expect(game.getCurrentScore()).toEqual(15)
    })
  })

// As a player, to be rewarded for my skill, I want to be credited extra scores when I bowl a strike
describe('scores strikes', function () {
  it('rewards players with extra scores for a strike by adding the value of the subsequent two rolls', function () {
    game.enterDroppedPins(10)
    game.enterDroppedPins(5)
    game.enterDroppedPins(4)
    expect(game.getCurrentScore()).toEqual(28)
  })
})
// As a player, to be rewarded for my skill, I want to be credited extra scorse when I bowl a spare
  describe('scores spare', function () {
    it('rewards players with extra scores for a strike by adding the value of the subsequent roll', function () {
      game.enterDroppedPins(5)
      game.enterDroppedPins(5)
      game.enterDroppedPins(4)
      expect(game.getCurrentScore()).toEqual(18)
    })
  })

// As a player, to know how well I'm playing, I want to receive a score according to the number of pins I hit in each frame
// As a player, so I don't have to remember my score, I want to see the history of my scores for each roll in each frame.

// As a player, so that I know who has won, I want to see my overall score (the sum of the score of all my frames)


// As a player, I want to know which roll I'm currently on in each frame
})
