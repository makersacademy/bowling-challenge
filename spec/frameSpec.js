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
    expect(frame.remainingPins()).toEqual(10);
  });

  it('should initialize with a constructor variable array to hold the scores', function() {
    expect(frame.results).toEqual([]);
  });

  it('should log the score of my first roll', function() {
    frame.rollOne(8);
    expect(frame.results.length).toEqual(1);
    expect(frame.results).toEqual([8]);
  });



});
