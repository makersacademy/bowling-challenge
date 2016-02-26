'use strict';

function Bowling() {
  this.frameInPlay = new Frame();
  this.frames = [];
  this.bonus = 0;
  this.rollHistory = [];
  this.framesPlayed = 0;
  this.lastFrame = this.frameInPlay
}

Bowling.prototype.bowl = function(score) {
  var frameBefore = this.frames[this.framesPlayed-2];
  var frame = this.currentFrame();
  if (this.frames.length === 10) {
    throw new Error("Game is over");
  };

  frame.finalFrame = this.isFinalFrame();

  // if (frame.finalFrame === true) {
  //   this.finalFrameScoring(score)
  // };
  //
  if (frame.finalFrame === false) {

    if (score === 10 && this.framesPlayed > 1) {
      if (frameBefore.isStrike()) {
        frameBefore.bonus += score;
      }
    };

    if (this.lastFrame.isStrike()) {
      this.lastFrame.bonus += score;
    };

    this.frameInPlay = frame;
    frame.roll(score);
    this.rollHistory.push(score);

    if (frame.isOver()) {
      this.frames.push(frame);
      this.framesPlayed ++;
      this.lastFrame = frame;
    };
  };
};



Bowling.prototype.currentFrame = function() {
  if (this.frameInPlay.isOver()) {
    return new Frame();
  } else {
    return this.frameInPlay;
  };
};

Bowling.prototype.isFinalFrame = function() {
  return (this.framesPlayed === 9)
};


Bowling.finalFrameScoring = function(score) {
  var frame = this.currentFrame();
  var frameEight = this.frames[7];
  var frameNine = this.frames[8];

  if (frameEight.isStrike() && frameEight.bonus < 10 ) {
    frameEight.bonus += score;
  };
};


// Bowling.prototype.totalScore = function() {
//   return this.frames.reduce(function(a,b) {
//     return a + b;
//   });
// };
