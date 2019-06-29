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

});



describe('Frame', function(){

  var frame;

  beforeEach(function() {
    frame = new Frame
  });

  it('defaults with certain requirements', function() {
    expect(frame.strike).toEqual(false)
    expect(frame.firstRoll).toEqual(true)
    expect(frame.spare).toEqual(false)
    expect(frame.score).toEqual(0)
    expect(frame.bonus).toEqual(0)
  });

  it('can add to score', function() {
    frame.addScore(3)
    expect(frame.score).toEqual(3)
  });
});
