'use strict';

describe("Frame", function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it("should add pins to the scorecard", function() {
    frame.addToFrame(1);
    frame.addToFrame(2);
    expect(frame.scoreCard).toEqual([1,2]);
  })

  it("knows when a frame is not over", function() {
    expect(frame.isOver()).toEqual(false);
  })

  it("knows when a frame is over", function() {
    frame.addToFrame(0);
    frame.addToFrame(0);
    expect(frame.isOver()).toEqual(true);
  })

  it("calculates the score of the frame", function() {
    frame.addToFrame(1);
    frame.addToFrame(2);
    expect(frame.getScore()).toEqual(3);
  })

  it("knows if frame is a spare", function() {
    frame.addToFrame(5);
    frame.addToFrame(5);
    expect(frame.isSpare()).toEqual(true);
  })

  it("has a bonus if frame is a spare", function() {
    frame.addToFrame(5);
    frame.addToFrame(5);
    expect(frame.bonus).toEqual(jasmine.any(Bonus))
  })

  it("calculates the total score plus its bonus", function() {
    frame.addToFrame(5);
    frame.addToFrame(5);
    frame.addToBonus(2);
    expect(frame.getTotalScore()).toEqual(12);
  })



})
