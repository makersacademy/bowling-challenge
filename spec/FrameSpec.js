'use strict';

describe("Frame", function() {

  var frame;
  var frameScore;

  beforeEach(function() {
    frame = new Frame();
  });

  // Unit Test 2
  it("can record the score of a roll", function() {
    frame.recordRoll(1)
    expect(frame.rolls.pop()).toEqual(1);
  });

  // Unit Test 3
  it("can record the score of a frame i.e. 2 consecutive rolls", function() {
    frame.recordRoll(1)
    frame.recordRoll(2)
    expect(frame.score()).toEqual(3);
  });
