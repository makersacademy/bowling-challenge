function Bowling(frame = new Frame(1)) {
  this.currentBall = 1;
  this.frameNumber = 1;
  this.currentFrame = frame;
  this.pendingFrames = [];
  this.completedFrames = [];
}

Bowling.prototype.bowl = function(pins) {
  this.addBonusScores(pins);
  if (this.currentBall === 1) {
    this.ballOneScore(pins);
  }else if (this.currentBall === 2) {
    this.ballTwoScore(pins);
  }else{
    this.tenthFrameFinalBall(pins);
  }
}

Bowling.prototype.ballOneScore = function(pins) {
  this.currentFrame.ballOne = pins;
  if (pins === 10 && this.frameNumber < 10) {
    this.strikeFrame();
  }else{
    this.currentBall++;
  }
}

Bowling.prototype.ballTwoScore = function(pins) {
  this.currentFrame.ballTwo = pins;
  if (this.frameNumber < 10) {
    this.currentBall = 1;
    if (this.currentFrame.ballOne + this.currentFrame.ballTwo == 10) {
      this.spareFrame();
    }
  }
  this.nextFrame();
}

Bowling.prototype.spareFrame = function() {
  this.currentFrame.pendingFrames = 1;
  this.pendingFrames.push(this.currentFrame)
}

Bowling.prototype.strikeFrame = function() {
      this.currentFrame.pendingFrames = 2;
      this.pendingFrames.push(this.currentFrame);
      this.nextFrame();
}

Bowling.prototype.addBonusScores = function(pins) {
  var frame;
  for (frame in this.pendingFrames) {
    frame = this.pendingFrames[frame];
    frame.pendingFrames--;
    frame.bonusScore += pins;
    if (frame.pendingFrames === 0) {
      this.pendingFrames.pop(frame);
      this.completedFrames.push(frame);
    }
  }
}

Bowling.prototype.nextFrame = function() {
  if (this.frameNumber === 10) {
    this.finalFrame();
  }else{
    this.frameNumber++;
    this.completedFrames.push(this.currentFrame);
    if (this.currentFrame.fakeFrame != true) {
      this.currentFrame = new Frame(this.frameNumber);
    }
  }
}

Bowling.prototype.finalFrame = function() {
  if (this.currentFrame.ballOne + this.currentFrame.ballTwo > 9) {
    this.currentBall++;
  }else{
    this.completedFrames.push(this.currentFrame);
    this.currentFrame = null;
  }
}

Bowling.prototype.tenthFrameFinalBall = function(pins) {
  this.currentFrame.bonusScore = pins;
  this.completedFrames.push(this.currentFrame);
  this.currentFrame = null;
}
