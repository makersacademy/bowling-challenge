function Player(name) {
  this.name = name;
  this.remainingFrames = 10;
  this.frames = [];
  this.currentFrame = new Frame();
  this.totalScore;
}

Player.prototype.enterRoll = function(score) {
  this.currentFrame.enterRoll(score);
  if (this.currentFrame.returnIsComplete()) {
    this._storeCurrentFrame();
    this._newFrame(score);
    this._reduceRemainingFrames();
  }
  this._refreshFrameScore();
};

Player.prototype._newFrame = function(score) {
  this.currentFrame = new Frame();
};

Player.prototype._storeCurrentFrame = function() {
  this.frames.push(this.currentFrame);
};

Player.prototype._reduceRemainingFrames = function() {
  this.remainingFrames -= 1;
};

Player.prototype._refreshFrameScore = function() {
  this.frames.forEach(frame => {
    if (this.frames.indexOf(frame) > 0) {
      var prevFrame = this.frames[this.frames.length - 2];
      this._recordBonusPoints(frame, prevFrame);
    }
    this._refreshTotalScore()
  });
};

Player.prototype._refreshTotalScore = function () {
  this.totalScore = 0;
  this.frames.forEach(frame => {
    this.totalScore += frame.score
    if(frame.bonusScore) {this.totalScore += frame.bonusScore}
  })
};

Player.prototype._recordBonusPoints = function (frame, prevFrame) {
  bonus = this._calculateBonus(frame, prevFrame)
  prevFrame.bonusScore = bonus
};

Player.prototype._calculateBonus = function(frame, prevFrame) {
  let prevprevFrame = this.frames[this.frames.length - 3]
  switch (prevFrame.notes) {
    case "Spare":
    return frame.rolls[0].score;
    break;
    case "Strike":
    triple = this._tripleBonusCheck(frame, prevFrame, prevprevFrame)
    return frame.score
    break;
    default:
    return 0
  }
};

Player.prototype._tripleBonusCheck = function(frame,prevFrame,prevprevFrame) {
  if(prevprevFrame && prevprevFrame.notes === "Strike") {
    prevprevFrame.bonusScore = (frame.score + prevFrame.score)
}
};
