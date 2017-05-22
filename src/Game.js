function Game() {
  this.frames = [];
  this.totalScore = 0;
  this.currentFrame = null;
  this.storedBowl = null;
  this.displayedValue;
};

Game.prototype.bowl = function(roll) {
  this.finalFrame = this.finalFrame || new FinalFrame();
  roll = Number(roll);
  this.frames.length >= 9 ? this._finalBowl(roll) : this._standardBowl(roll);
};

// Private

Game.prototype._standardBowl = function(roll) {
  if (this.currentFrame !== null) {
    this.frames.push(new Frame([this.currentFrame, roll]));
    this.currentFrame = null;
  } else if (roll === 10) {
    this.frames.push(new Frame([roll]));
  } else {
    this.currentFrame = roll;
  }
  this._calculateScore();
};

Game.prototype._finalBowl = function(roll) {
  this.storedBowl = this.storedBowl || roll;
  this.currentFrame = roll;
  this.finalFrame.addBowl(roll);
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
  return this._currentScore();
}

Game.prototype._currentScore = function() {
  var score = 0;
  for (i = 0; i < this.frames.length; i++) {
    score += this._calculateFrame(this.frames[i], i);
  };
  return score;
};

Game.prototype._calculateFrame = function(frame, i) {
  return (
    frame.score.reduce((a, b) => a + b, 0) + this._calculateBonus(frame, i)
  );
};

Game.prototype._calculateBonus = function(frame, i) {
  var frames = this.frames;
  if (frame === this.finalFrame) { return 0 };
  if (frame.isStrike()) {
    return frame.strikeBonus(frames[i+1], frames[i+2], this.currentFrame);
  } else if (frame.isSpare()) {
    return frame.spareBonus(this.frames[i+1], this.currentFrame);
  }
  return 0;
};
