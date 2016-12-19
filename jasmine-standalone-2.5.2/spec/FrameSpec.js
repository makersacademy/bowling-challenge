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
})
