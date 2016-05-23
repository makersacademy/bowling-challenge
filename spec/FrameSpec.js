"use strict"

describe("Frames", function () {
  var frames;


  beforeEach(function () {
    frames = new Frames();
  });

  it("gives the starting number of frames", function () {
    expect(frames.frameNumber()).toEqual(0)
  });

  it("gives the number of frames", function () {
    frames.frameCount = 5
    expect(frames.frameNumber()).toEqual(5)
  });


  it("gives an error an error if there's greater than 10 frames", function () {
    frames.frameCount = 11
    expect(function(){frames.frameNumber()}).toThrowError("A bowling game only has 10 frames")
  });
});