"use strict"

describe("Bowling", function () {
  var frames;


  beforeEach(function () {
    frames = new Frames();
  });

  it("gives the number of frames", function () {
    expect(frames.frameNumber()).toEqual(0)
  });
});