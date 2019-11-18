'use strict';

describe ('frames', function() {
  
  var frame;

  beforeEach(function() {
    frame = new Frame()
  });

  it ('is not completed when created', function() {
    expect(frame.isComplete()).toBe(false);
  });

  it ('is not set to Strike when created', function() {
    expect(frame.isStrike()).toBe(false);
  });

  it ('is not set to Spare when created', function() {
    expect(frame.isSpare()).toBe(false);
  });

  it ('all rolls are set to 0 when created', function() {
    expect(frame.roll1).toBeNull();
    expect(frame.roll2).toBeNull();
  });

  it ('is complete when the first roll is a strike', function() {
    frame.roll1 = 10;
    expect(frame.isComplete()).toBe(true);
  });

  it ('is complete when both rolls have been entered', function() {
    frame.roll1 = 6;
    frame.roll2 = 3;
    expect(frame.isComplete()).toBe(true);
  });

  it('adds a score to roll1 when roll1 is null', function() {
    frame.addRoll(5);
    expect(frame.roll1).toEqual(5)
    expect(frame.roll2).toBeNull();
  });

  it('adds a score to roll2 when roll1 is not null', function() {
    frame.addRoll(5);
    frame.addRoll(4);
    expect(frame.roll1).toEqual(5);
    expect(frame.roll2).toEqual(4);
  });

  it('roll2 stays null if the frame is complete after roll1', function() {
    frame.addRoll(10);
    frame.addRoll(5);
    expect(frame.roll2).toBeNull()
  });
});