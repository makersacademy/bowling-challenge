'use strict';

function Scorecard() {
  this.frames = [];
  this.currentFrame = new Frame();
  // this.score = 0
  // var currentFrame = new Frame();

}

// Scorecard.prototype.total = function(frames) {
//   console.log(this.score)
//   frames.forEach(function(element) {
//     console.log(this.score)
//     this.score = this.score + element.reduce((a,b) => a + b, 0)
//   });
//   return this.score
// };

Scorecard.prototype.total = function(frames) {
  var score = 0
  frames.forEach(function(element) {
    score = score + element.reduce((a,b) => a + b, 0)
  });
  return score
};

Scorecard.prototype.turn = function(pins) {
  // console.log("pins = " + pins)
  // console.log("pins = " + this.currentFrame.roll(pins))
  if (this.currentFrame.roll(pins) != false) {
    this.frames.push(this.currentFrame.roll(pins))
    this.currentFrame = new Frame()
  }
};

Scorecard.prototype.frameResult = function(frameN) {
  console.log([[1,2],[3,4]])
  console.log("frameN-1")
  console.log(this.frames)
  console.log("^^^^")
  console.log(this.frames[frameN-1])
  console.log("^^^^")
  console.log("^^^^")
  return this.frames[frameN - 1].reduce((a,b) => a + b, 0)
};


// array.reduce((a,b) => a + b, 0)
