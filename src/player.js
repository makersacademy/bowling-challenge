function Player(name) {
  this.name = name;
  this.remainingFrames = 12;
  this.frames = [];
  this.currentFrame = new Frame();
  this.totalScore
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
  this.totalScore = 0
  var prevFrame
  var lastIndex = this.frames.length-1
  this.frames.forEach(frame => {
    if (this.frames.indexOf(frame) > 0)
      {
        var prevFrame = this.frames[lastIndex -1]
        this._addBonusPoints(frame, prevFrame)
      }
    this.totalScore += frame.score
  })

};

Player.prototype._addBonusPoints = function(frame, prevFrame) {
  if(prevFrame.notes === "Spare")
  { prevFrame.score += frame.rolls[0].score
  this.totalScore += frame.rolls[0].score}

};
