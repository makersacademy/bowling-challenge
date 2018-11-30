'use strict';

describe('Scorecard', function() {

  var scorecard

  beforeEach(function() {
    scorecard = new Scorecard()
  })

  it('starts with 0 points', function() {
   expect(scorecard.getCurrentScore()).toEqual(0)
  })

  it('starts with an initial frame', function() {
    expect(scorecard.frames.length).toEqual(1)
  })

  it('can have a frame added', function() {
    scorecard.addFrame()
    expect(scorecard.frames.length).toEqual(2)
  })

  it('can have a score added', function() {
    scorecard.addScore(5)
    expect(scorecard.frames.length).toEqual(1)
    expect(scorecard.getCurrentScore()).toEqual(5)
  })

  it('starts a new frame when adding a score after a strike', function() {
      scorecard.addScore(10)
      expect(scorecard.frames.length).toEqual(1)
      scorecard.addScore(1)
      expect(scorecard.frames.length).toEqual(2)
  })

  it('starts a new frame when adding a score after 2 rolls', function() {
      scorecard.addScore(4)
      scorecard.addScore(4)
      expect(scorecard.frames.length).toEqual(1)
      scorecard.addScore(4)
      expect(scorecard.frames.length).toEqual(2)
  })

  it('reports that the last frame has ended after a strike', function() {
    scorecard.addScore(10)
    expect(scorecard.lastFrameEnded()).toEqual(true)
  })

  it('reports that the last frame has ended after a spare', function() {
    scorecard.addScore(5)
    scorecard.addScore(5)
    expect(scorecard.lastFrameEnded()).toEqual(true)
  })

  it('reports that the last frame has ended after no scores', function() {
    scorecard.addScore(0)
    expect(scorecard.lastFrameEnded()).toEqual(false)
    scorecard.addScore(0)
    expect(scorecard.lastFrameEnded()).toEqual(true)
  })

  it('reports that the last frame has not ended after 1 roll', function() {
    scorecard.addScore(5)
    expect(scorecard.lastFrameEnded()).toEqual(false)
  })

})
