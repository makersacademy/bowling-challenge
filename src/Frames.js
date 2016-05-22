"use strict"

function Frames() {
  this.frameCount = 0
}


Frames.prototype.frameNumber = function () {
  if (this.frameCount > 10) {
    throw new Error("A bowling game only has 10 frames")
  };
  return this.frameCount
}