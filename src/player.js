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
  this._refreshTotalScore();
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

Player.prototype._refreshTotalScore = function() {
  this.totalScore = 0;
  this.frames.forEach(frame => {
    if (this.frames.indexOf(frame) > 0) {
      var prevFrame = this.frames[this.frames.length - 2];
      this._recordBonusPoints(frame, prevFrame);
      this.totalScore += prevFrame.bonusScore;
    }
    this.totalScore += frame.score;
  });
};

Player.prototype._recordBonusPoints = function (frame, prevFrame) {
  bonus = this._calculateBonus(frame, prevFrame)
  prevFrame.bonusScore = bonus
};

Player.prototype._calculateBonus = function(frame, prevFrame) {
  if (prevFrame.notes === "Spare") {
    return frame.rolls[0].score;
  } else if (prevFrame.notes === "Strike") {
    return frame.score;
  } else {
    return 0;
  }
};
