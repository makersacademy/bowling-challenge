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

  it('records the outcomes of bowls', function() {
    expect(frame.getBowl1()).toEqual(3);
    expect(frame.getBowl2()).toEqual(5);
  });

  it('gets a bowling score', function() {
    expect(strike.setBowl1FinalScore()).toEqual('X')
    expect(spare.setBowl1FinalScore()).toEqual(6)
    expect(spare.setBowl2FinalScore()).toEqual('/')
    expect(frame.setBowl2FinalScore()).toEqual(5)
  });
});