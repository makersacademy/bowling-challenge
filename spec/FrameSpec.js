"use strict";

describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it("creates a score for every bowl", function(){
    frame.bowl();
    expect(frame.currentFrame.length).toEqual(2)
  })

  it("clears scores once passed to Game to store", function() {
    frame.bowl();
    frame.clearFrame();
    expect(frame.currentFrame).toEqual([]);
  })

  it("gives a result up to 10", function() {
    frame.bowl();
    expect(frame.currentFrame[0] + frame.currentFrame[1]).toBeLessThan(11);
  })
})
