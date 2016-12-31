'use strict';

describe('Frame', function() {
  var frame;
  var roll;

  beforeEach(function() {
    roll = new Roll();
    frame = new Frame();
  });

  it('Tests whether the frame has been completed', function() {
    var roll1 = roll.firstRoll(3);
    var roll2 = roll.secondRoll(5);
    expect(frame.completeFrame(roll1, roll2)).toBe(2);
  });
});
