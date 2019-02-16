'use strict';

describe("TenthFrame", function() {

  var frame;
  var frameScore;

  beforeEach(function() {
    frame = new TenthFrame();
  });

  it("can record the score of a roll", function() {
    frame.roll(3)
    expect(frame.rolls.pop()).toEqual(3);
  });

  it("no spare or strike limits frame to 2 rolls", function() {
    frame.roll(3)
    expect(frame.roll(3)).toEqual([3,3]);
  });

  it("spare extends frame to 3 rolls", function() {
    frame.roll(5)
    frame.roll(5)
    expect(frame.roll(10)).toEqual([5, 5, 10]);
  });

  it("strike extends frame to 3 rolls", function() {
    frame.roll(10)
    frame.roll(10)
    expect(frame.roll(10)).toEqual([10, 10, 10]);
  });
});
