function Bowling(frame, scoreCard) {
  this.currentBall = 1;
  this.frameNumber = 1;
  this.currentFrame = frame || new Frame(1);
  this.pendingFrames = [];
  this.completedFrames = [];
  this.scoreCard = scoreCard || new ScoreCard();
}

Bowling.prototype.bowl = function(pins) {
  this.addBonusScores(pins);
  this.scoreCard.updateFrame(this.frameNumber, this.currentBall, pins);
  this.chooseScoreType(pins);
  if (this.scoreCard.fakeScoreCard != true) {
    this.scoreCard.updateTotals(this.completedFrames);
  }
}

Bowling.prototype.chooseScoreType = function(pins) {
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
  this.chooseFrameAction();
  this.nextFrame();
}

Bowling.prototype.chooseFrameAction = function() {
  if (this.frameNumber < 10) {
    this.currentBall = 1;
    if (this.currentFrame.ballOne + this.currentFrame.ballTwo == 10) {
      this.spareFrame();
    }else{
      this.completedFrames.push(this.currentFrame);
    }
  }
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
  var frame,
  bonusFrame;
  for (frame in this.pendingFrames) {
    bonusFrame = this.pendingFrames[frame];
    bonusFrame.pendingFrames--;
    bonusFrame.bonusScore += pins;
  }
  this.removeCompletedFrames()
}

Bowling.prototype.removeCompletedFrames = function() {
  for (frame = this.pendingFrames.length - 1; frame >= 0; --frame) {
    bonusFrame = this.pendingFrames[frame];
    if (bonusFrame.pendingFrames === 0) {
      this.pendingFrames.splice(parseInt(frame), 1);
      this.completedFrames.push(bonusFrame);
    }
  }
}

Bowling.prototype.nextFrame = function() {
  if (this.frameNumber === 10) {
    this.finalFrame();
  }else{
    this.frameNumber++;
    if (this.currentFrame.fakeFrame != true) {
      this.currentFrame = new Frame(this.frameNumber);
    }
  }
}

Bowling.prototype.finalFrame = function() {
  if (this.currentFrame.ballOne + this.currentFrame.ballTwo > 9) {
    this.currentBall++;
  }else{
    this.gameOver();
  }
}

Bowling.prototype.tenthFrameFinalBall = function(pins) {
  this.currentFrame.bonusScore = pins;
  this.gameOver();
}

Bowling.prototype.gameOver = function() {
  this.completedFrames.push(this.currentFrame);
  this.currentFrame = null;
  this.frameNumber = 'GAME';
  this.currentBall = 'OVER';
}
