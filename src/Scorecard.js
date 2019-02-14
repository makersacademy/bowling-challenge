'use strict';

function Scorecard() {
  this.FRAME_MAX = 10;
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
    // console.log("SCORECARD:received = " + this.currentFrame.roll(pins))
  if (this.currentFrame.roll(pins) != false) {
    console.log("SCORECARD so the IF runs")
    this.frames.push(this.currentFrame.getRolls())
    console.log("SCORECARD:framsArray = " + this.frames)
    this.currentFrame = new Frame();
  } else {
    console.log("only 1 roll so not created new frame object")
  }
};

Scorecard.prototype.frameResult = function(frameNumber) {
  // console.log([[1,2],[3,4]])
  // console.log("frameN-1")
  // console.log(this.frames)
  // console.log("^^^^")
  // console.log(this.frames[frameNumber-1])
  // console.log("^^^^")
  // console.log("^^^^")
  var frameScore = this.frames[frameNumber - 1].reduce((a,b) => a + b, 0)
  if (frameScore > 9) {
    frameScore
  } else {
    return frameScore
  }
};

Scorecard.prototype.isSpare = function (frameNumber) {
  console.log(this.frames)
  console.log("^^^^")
  console.log(this.frames[frameNumber - 1])
  console.log("^^^^")
  // console.log("^^^^")
  var frameScore = this.frames[frameNumber - 1].reduce((a,b) => a + b, 0)
  if (frameScore === this.FRAME_MAX) {
    return true
  } else {
    return false
  }
};
