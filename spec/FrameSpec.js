'use strict';

describe("Frame", function() {

  var frame;
  var frameScore;

  beforeEach(function() {
    frame = new Frame();
  });

  // Unit Test 2
  it("can record the score of a roll", function() {
    frame.roll(3)
    expect(frame.rolls.pop()).toEqual(3);
  });

  it("ends frame after 2 rolls", function() {
    frame.roll(3)
    frame.roll(3)
    expect(frame.roll(3)).toEqual([3,3]);
  });

  it("ends frame after strike", function() {
    frame.roll(10)
    expect(frame.roll(1)).toEqual([10]);
  });

  // Unit Test 3
  // it("can record the score of a frame i.e. 2 consecutive rolls", function() {
  //   frame.recordRoll(1)
  //   frame.recordRoll(2)
  //   expect(frame.score()).toEqual(3);
  // });

  // The bonus for that frame is the number of pins
  // knocked down by the next two rolls
  // Unit Test 4
  // it("can calculate strike bonus", function() {
  //   frame.recordRoll(10)
  //   frame.recordRoll(10)
  //   frame.recordRoll(10)
  //   expect(frame.score()).toEqual(30);
  // });

});
