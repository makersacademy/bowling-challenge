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

  beforeEach(function() {
    frame = new Frame;
  });
});