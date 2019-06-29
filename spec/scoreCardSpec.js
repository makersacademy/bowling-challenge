'use strict';

describe('ScoreCard', function() {
  var scoreCard, frame;

  beforeEach(function() {
    frame = new Frame;
    scoreCard = new ScoreCard(frame);
  });

  it('starts with a frames array with one object', function() {
    expect(scoreCard.frames[0]).toEqual(frame);
  });

  it('has a current frame variable', function() {
    expect(scoreCard.currentFrame).toEqual(scoreCard.frames[0])
  })

  it('can decide if on first or second roll', function() {
    expect(scoreCard.isFirstRoll()).toEqual(true)
  })

  it('tells Frame to add score', function() {
    scoreCard.addScore(3)
    expect(scoreCard.currentFrame.score).toEqual(3)
  })

  describe('adds new frame if adding score returns true', function() {
    scoreCard.addScore(1);
    scoreCard.addScore(1);
    expect(scoreCard.frames.length).toEqual(2);
  })

});
