function Game(frames = 10) {
  this._frames = [];
  this._scoreLog = [];
  this._maxFrames = frames;
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
      this._scoreLog[i] += this._frames[i+1].firstBall();
    } else if(this._frameIsStrike(i)) {
      if(this._frameIsStrike(i+1)) {
        this._scoreLog[i] = 10 + this._frames[i+1].firstBall() + this._frames[i+2].firstBall();
      } else {
        this._scoreLog[i] = 10 + this._frames[i+1].firstBall() + this._frames[i+1].secondBall();
      }
    }
  }
  return this._scoreLog.reduce((a, b) => a + b);
};

Game.prototype._frameIsSpare = function(index) {
  return this._frames[index].currentRoll() === 10;
};

Game.prototype._frameIsStrike = function(index) {
  return this._frames[index].currentRoll() === "X";
};

Game.prototype._checkIfGameOver = function() {
  if(this.checkAllScores().length === this._maxFrames) {
    throw new Error("Game over!");
  }
};
