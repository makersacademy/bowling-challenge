function Game(frames = 10) {
  this._frames = [];
  this._scoreLog = [];
  this._maxFrames = frames;
  this._allThePins = 10;
}

Game.prototype.addFrame = function(frame) {
  this._checkIfGameOver();
  this._frames.push(frame);
};

Game.prototype.checkAllScores = function() {
  return this._frames;
};

Game.prototype.checkGameLength = function() {
  return this._maxFrames;
};

Game.prototype.calculateGameTotal = function() {
  for(var i = 0; i < this._frames.length; i++) {
    this._scoreLog.push(this._frames[i].currentRoll());
    if(this._frameIsSpare(i)) {
      this._addSpareScore(i);
    } else if(this._frameIsStrike(i)) {
      this._addStrikeScore(i);
    }
  }
  return this._scoreLog.reduce((a, b) => a + b);
};

Game.prototype._addStrikeScore = function(index) {
  if(this._frameIsStrike(index+1)) {
    this._addConsecutiveStrikeScore(index);
  } else {
    this._addSingleStrikeScore(index);
  }
};

Game.prototype._addConsecutiveStrikeScore = function(index) {
  return this._scoreLog[index] = this._addAllPinsAndNextRoll(index) + this._frames[index+2].firstBall();
};

Game.prototype._addSingleStrikeScore = function(index) {
  return this._scoreLog[index] = this._addAllPinsAndNextRoll(index) + this._frames[index+1].secondBall();
};

Game.prototype._addAllPinsAndNextRoll = function(index) {
  return this._allThePins + this._frames[index+1].firstBall();
};

Game.prototype._addSpareScore = function(index) {
  return this._scoreLog[index] += this._frames[index+1].firstBall();
};

Game.prototype._frameIsSpare = function(index) {
  return this._frames[index].currentRoll() === this._allThePins;
};

Game.prototype._frameIsStrike = function(index) {
  return this._frames[index].currentRoll() === "X";
};

Game.prototype._checkIfGameOver = function() {
  if(this.checkAllScores().length === this._maxFrames) {
    throw new Error("Game over!");
  }
};
