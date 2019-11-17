'use strict';

describe ('frames', function() {
  
  var frame;

  beforeEach(function() {
    frame = new Frame()
  });

  it ('is not completed when created', function() {
    expect(frame.isComplete()).toEqual(false);
  });

  it ('is not set to Strike when created', function() {
    expect(frame.isStrike()).toEqual(false);
  });

  it ('is not set to Spare when created', function() {
    expect(frame.isSpare()).toEqual(false);
  });

  it ('all rolls are set to 0 when created', function() {
    expect(frame.roll1).toEqual(null);
    expect(frame.roll2).toEqual(null);
  });

  it ('is complete when the first roll is a strike', function() {
    frame.roll1 = 10;
    expect(frame.isComplete()).toEqual(true);
  });

  it ('is complete when both rolls have been entered', function() {
    frame.roll1 = 6;
    frame.roll2 = 3;
    expect(frame.isComplete()).toEqual(true);
  });
});