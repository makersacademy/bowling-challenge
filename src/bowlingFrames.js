'use strict'

var Frames = function () {
  this.frames = [ ]
}

Frames.prototype.createsFrames = function () {
  for (var x = 0; x < 10; x++) {
    this.frames[x] = { frame: x + 1 }
  }
}

Frames.prototype.scoresIntoFrames = function (frame, bowl, score) {
  this.frames.map(f => {
    if (f.frame === frame && bowl === 1) {
      f.bowl1 = score
    } else if (f.frame === frame && bowl === 2) {
      f.bowl2 = score
    } else if (f.frame === frame && bowl === 3) {
      f.bowl3 = score
    }
  })
}

Frames.prototype.searchFrames = function (frame, bowl) {
  for (var number = 0; number < this.frames.length; number++) {
    if (this.frames[number]['frame'] === frame) {
      if (bowl === 1) {
        return this.frames[number]['bowl1']
      } else if (bowl === 2) {
        return this.frames[number]['bowl2']
      } else if (bowl === 3) {
        return this.frames[number]['bowl3']
      }
    }
  }
  return null
}
