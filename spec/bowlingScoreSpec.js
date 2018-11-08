'use strict';

describe('BowlingScorecard', function() {

  var bowlingScorecard;

  beforeEach(function() {
    bowlingScorecard = new BowlingScorecard();
  });

  it('score starts at 0', function() {
    expect(bowlingScorecard.getCurrentScore()).toEqual(0);
  });

  it('has a frame counter', function() {
    expect(bowlingScorecard.frameCounter).toEqual(0);
  })

  it('holds a frame', function() {
    bowlingScorecard.setNewFrame(2, 3)
    expect(bowlingScorecard.frame instanceof Frame).toBeTruthy();
    expect(bowlingScorecard.frameCounter).toEqual(1);
    expect(bowlingScorecard.frame.setBowl1Score()).toEqual(2);
    expect(bowlingScorecard.frame.setBowl2Score()).toEqual(3);
    });
  
  it('holds a final frame', function() {
    for (var i = 0; i < 10; i++) {
      bowlingScorecard.setNewFrame(4, 6, 8);
    };
    expect(bowlingScorecard.frame instanceof FinalFrame).toBeTruthy();
    expect(bowlingScorecard.frameCounter).toEqual(10);
    expect(bowlingScorecard.frame.setBowl1Score()).toEqual(4);
    expect(bowlingScorecard.frame.setBowl2Score()).toEqual('/');
    expect(bowlingScorecard.frame.setBowl2Score()).toEqual(8);
    });
});

describe('Frame', function() {

  var strike;
  var spare;
  var frame;

  beforeEach(function() {
    frame = new Frame(3, 5);
    strike = new Frame(10);
    spare = new Frame(6, 4);
  });

  it('gets a bowling score', function() {
    expect(strike.setBowl1Score()).toEqual('X');
    expect(spare.setBowl1Score()).toEqual(6);
    expect(spare.setBowl2Score()).toEqual('/');
    expect(frame.setBowl2Score()).toEqual(5);
  });
});

describe('FinalFrame', function() {

  var strike;
  var spare;
  var frame;

  beforeEach(function() {
    frame = new Frame(3, 5);
    strike = new Frame(10,10);
    spare = new Frame(6, 4, 2);
  });

  it('gets a bowling score', function() {
    expect(strike.setBowl1Score()).toEqual('X');
    expect(strike.setBowl3Score()).toEqual('X');
    expect(spare.setBowl1Score()).toEqual(6);
    expect(spare.setBowl2Score()).toEqual('/');
    expect(spare.setBowl3Score()).toEqual(2);
    expect(frame.setBowl1Score()).toEqual(3);
    expect(frame.setBowl2Score()).toEqual(5);
  });
});