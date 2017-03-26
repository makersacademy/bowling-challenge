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

Game.prototype._checkIfGameOver = function() {
  if(this.checkAllScores().length === this._maxFrames) {
    throw new Error("Game over!");
  }
};

Game.prototype.calculateGameTotal = function() {
  for(var i = 0; i < this._frames.length; i++ ) {
    this._scoreLog.push(this._frames[i].currentRoll());
    if(this._frames[i].currentRoll() === 10) {
      this._scoreLog[i] += this._frames[i+1]._firstBall;
    }
    if(this._frames[i].currentRoll() === "X") {
      this._scoreLog[i] = 10 + this._frames[i+1]._firstBall + this._frames[i+1]._secondBall;
    }
  }
  var sum = this._scoreLog.reduce((a, b) => a + b, 0);
  return sum;
};
