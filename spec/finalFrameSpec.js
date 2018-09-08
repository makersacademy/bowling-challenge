'use strict'


'use strict'

describe('Frame behaviour', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it('should have a constuctor variable of 10 pins as default', function() {
    expect(frame.DEFAULT_PINS).toEqual(10);
  });


  it('should return the current number of pins left standing', function() {
    frame.rollOne(8);
    expect(frame.remainingPins()).toEqual(2);
  });

  it('should initialize with a constructor variable array to hold the scores', function() {
    expect(frame.results).toEqual([]);
  });

  it('should log the score of my first roll', function() {
    frame.rollOne(8);
    expect(frame.results.length).toEqual(1);
    expect(frame.results).toEqual([8]);
  });


  it('should log the score of my second roll', function() {
    frame.rollOne(8);
    frame.rollTwo(1);
    expect(frame.results.length).toEqual(2);
    expect(frame.results).toEqual([8,1]);
  });


  it('should give the total score of the frame', function() {
    frame.rollOne(8);
    frame.rollTwo(1);
    expect(frame.frameScore()).toEqual(9);
  });

  it('a gutter game results in a zero score', function() {
    frame.rollOne(0);
    frame.rollTwo(0);
    expect(frame.frameScore()).toEqual(0);
  });
});
