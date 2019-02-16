'use strict';

describe("Frame", function() {

  var frame;
  var frameScore;

  beforeEach(function() {
    frame = new Frame();
  });

  it("can record the score of a roll", function() {
    frame.roll(3)
    expect(frame.rolls.pop()).toEqual(3);
  });

  it("ends frame after 2 rolls", function() {
    frame.roll(3)
    expect(frame.roll(3)).toEqual([3,3]);
  });

  it("ends frame after strike", function() {
    expect(frame.roll(10)).toEqual([10]);
  });
});
