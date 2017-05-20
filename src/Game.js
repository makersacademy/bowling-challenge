function Game() {
  this.frames = [];
  this.totalScore = 0;
  this.currentFrame = null;
  this.spare = undefined;
  this.finalFrame = new FinalFrame();
  this.spareBonus = 0;
};

Game.prototype.bowl = function(roll) {
  roll = Number(roll);
  this.frames.length >= 9 ? this._finalBowl(roll) : this._standardBowl(roll);
};

// Private

Game.prototype._standardBowl = function(n) {
  if (this.currentFrame) {
    this.frames.push(new Frame([this.currentFrame, n]));
    this.currentFrame = null;
  } else if (n === 10) {
    this.frames.push(new Frame([n]));
  } else {
    this.currentFrame = n;
  }
  this._calculateScore();
};

Game.prototype._finalBowl = function(n) {
  this.currentFrame ? this.currentFrame = null : this.currentFrame = n;
  this.finalFrame.addBowl(n);
  this._calculateScore();
};

Game.prototype._calculateScore = function() {
  if (this.finalFrame.isEnded()) {
    this.totalScore = this._gameOver();
  } else {
    this.totalScore = this._currentScore() + this.currentFrame;
  };
}

Game.prototype._gameOver = function() {
  this.frames.push(this.finalFrame);
  return this._currentScore() + this.currentFrame;
}

Game.prototype._currentScore = function() {
  var score = 0;
  this.frames.forEach(function(frame){
    score += frame.score.reduce((a, b) => a + b, 0);
  });
  return score
};

Game.prototype._finalFrameCheck = function() {
  var frame = this.frames[this.frames.length-1];
  if (frame.isEnded()) {
    updateScores();
  } else {
    updateFinalFrame(frame);
  };
};
