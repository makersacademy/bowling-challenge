function ScoreBoard(length) {
  this.score = 0;
  this.currentFrame = 0;
  this.frames = this.setupFrames(length);
}

ScoreBoard.prototype.setupFrames = function(frameCount) {
  var i,
    frames = [];

  for ( i = 0; i < frameCount; i++ ) {
    var frame = new Frame();
    frames.push(frame);
  }

  return frames;
};

ScoreBoard.prototype.roll = function(pins) {
  var frame = this.frames[this.currentFrame];
  frame.registerRoll(pins);
  if ( !frame.checkSpare() && !frame.checkStrike() ) {
    this.score += pins;
  }
  this.advanceFrame();
};

ScoreBoard.prototype.getFrame = function(frameNumber) {
  return this.frames[frameNumber - 1];
};

ScoreBoard.prototype.advanceFrame = function() {
  var frame = this.frames[this.currentFrame];
  if ( frame.checkSpare() || frame.checkStrike() ) {
    this.currentFrame++;
  } else if ( frame.rollCount === 2) {
    this.currentFrame++;
  }
};
