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
    expect(bowlingScorecard.frameCounter).toEqual(0)
  })

  it('holds a frame', function() {
    bowlingScorecard.setNewFrame(2, 3)
    expect(bowlingScorecard.frame instanceof Frame).toBeTruthy();
    expect(bowlingScorecard.frameCounter).toEqual(1)
    expect(bowlingScorecard.frame.setBowl1Score()).toEqual(2)
    expect(bowlingScorecard.frame.setBowl2Score()).toEqual(3)
    });
  
  it('holds a final frame', function() {
    for (var i = 0; i < 10; i++) {
      bowlingScorecard.setNewFrame(4, 5)
    }
    expect()
    expect(bowlingScorecard.frame instanceof LastFrame).toBeTruthy();
    expect(bowlingScorecard.frameCounter).toEqual(10)
    expect(bowlingScorecard.frame.setBowl1Score()).toEqual(4)
    expect(bowlingScorecard.frame.setBowl2Score()).toEqual(5)
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