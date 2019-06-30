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

  it('adds new frame to frames aray with addFrame()', function() {
    scoreCard.addFrame(new Frame);
    expect(scoreCard.frames.length).toEqual(2)
  })

  describe('bowler adds two new scores that are non strike', function() {
    it('adds a new frame', function() {
      scoreCard.addScore(1);
      scoreCard.addScore(1);
      expect(scoreCard.frames.length).toEqual(2);
    })
  })

});
