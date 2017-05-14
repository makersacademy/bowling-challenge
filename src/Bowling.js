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
  }else{
    this.ballTwoScore(pins);
  }
}

Bowling.prototype.ballOneScore = function(pins) {
  this.currentFrame.ballOne = pins;
  if (pins === 10) {
    this.strikeFrame(pins);
  }else{
    this.currentBall++;
  }
}

Bowling.prototype.ballTwoScore = function(pins) {
  this.currentFrame.ballTwo = pins;
  this.currentBall = 1;
  if (isSpare(this.currentFrame)) {
    this.spareFrame();
  }else{
    this.completedFrames.push(this.currentFrame)
  }
  this.nextFrame();
}

function isSpare(frame) {
  var scores = [frame.ballOne, frame.ballTwo]
  return scores.reduce(add, 0) == 10;
}

Bowling.prototype.spareFrame = function() {
  this.currentFrame.pendingFrames = 1;
  this.pendingFrames.push(this.currentFrame)
}

Bowling.prototype.strikeFrame = function(pins) {
  this.currentFrame.pendingFrames = 2;
  this.pendingFrames.push(this.currentFrame)
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
  if (this.frameNumber === 10) { this.finalFrame()
  }else{
    this.frameNumber++;
    if (this.currentFrame.fakeFrame != true) {
      this.currentFrame = new Frame(this.frameNumber);
    }
  }
}

Bowling.prototype

//helpers
function add(score1, score2) {
  return score1 + score2;
}
