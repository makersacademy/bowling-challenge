'use strict'

describe('Features', function () {
  let game
  beforeEach(function () { 
    game = new Game()
  })

  describe('frames', function () {
  // As a player, so that I know how long the game is, I want to see how many frames the game has
    it('shows the number of frames of a game', function () {
      expect(game.numberOfFrames).toBeGreaterThan(0)
    })
  // As a player, so I know how many frames I have already played, I want to know which frame I'm currently playing
    it('shows the number of current frame of a game', function () {
      
    } )
  } )


// As a player, to be assigned a score, I want to be able to record the number of pins I hit in each roll in the correct frame
// As a player, to know how well I'm playing, I want to receive a score according to the number of pins I hit in each frame
// As a player, so I don't have to remember my score, I want to see the history of my scores for each roll in each frame.
// As a player, so that I know who's winnig the game, I want to see my running score (the sum of the score of all my rolls)
// As a player, so that I know who has won, I want to see my overall score (the sum of the score of all my frames)
// As a player, to be rewarded for my skills, I want to be credited extra scores when I bowl a strike
// As a player, to be rewarded for my skills, I want to be credited extra scorse when I bowl a spare


// As a player, I want to know which roll I'm currently on in each frame

})