'use strict';

describe('BowlingScorecard', function() {

  var bowlingScorecard;

  beforeEach(function() {
    bowlingScorecard = new BowlingScorecard();
  });

  it('score starts at 0', function() {
    expect(bowlingScorecard.getCurrentScore()).toEqual(0);
  });

  it('holds a frame', function() {
    expect(bowlingScorecard.frame1 instanceof Frame).toBeTruthy();
    });

});

describe('Frame', function() {

  var frame;

  beforeEach(function() {
    frame = new Frame(3, 5);
  });

  it('records the outcomes of bowls', function() {
    expect(frame.getBowl1()).toEqual(3);
    expect(frame.getBowl2()).toEqual(5);
  });
});