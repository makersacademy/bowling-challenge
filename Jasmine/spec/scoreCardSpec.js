"use strict";

describe('ScoreCard', function() {

  var scoreCard;

  beforeEach(function() {
    scoreCard = new ScoreCard()
  })

  it('starts with no frames', function(){
    expect(scoreCard.game.length).toEqual(0)
  })

  it('starts the game with a frame', function(){
    expect(scoreCard.frame.ballOne).toEqual(null)
  })

  it('adds a frame into the game each round', function(){
    scoreCard.play(6, 2)
    expect(scoreCard.game.length).toEqual(1)
  })

  it('adds ballOne and ballTwo to the frame', function() {
    scoreCard.play(4, 5)
    expect(scoreCard.frame.ballOne).toEqual(4)
  })

  it('keeps track of the current round', function() {
    for(var i = 0; i < 3; i++) {
      scoreCard.play(4, 5)
    }
    expect(scoreCard.currentRound()).toEqual(3)
  })

  it('adds the frame score', function() {
    scoreCard.play(5, 4)
    expect(scoreCard.frameScore()).toEqual(9)
  })

  it('adds a gutterball game', function() {
    scoreCard.play()
    expect(scoreCard.frameScore()).toEqual(0)
  })

  it('adds the combined frame scores', function(){
    scoreCard.play(5, 4)
    scoreCard.play(6, 2)
    expect(scoreCard.currentScore()).toEqual(17)
  })

})