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

  var strike;
  var spare;
  var frame;

  beforeEach(function() {
    frame = new Frame(3, 5);
    strike = new Frame(10)
    spare = new Frame(6, 4)
  });

  it('gets a bowling score', function() {
    expect(strike.setBowl1Score()).toEqual('X')
    expect(spare.setBowl1Score()).toEqual(6)
    expect(spare.setBowl2Score()).toEqual('/')
    expect(frame.setBowl2Score()).toEqual(5)
  });
});