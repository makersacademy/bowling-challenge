function Game(frame) {
  this._ballcount = 0;
  this._score = 0;
  this.framesLog = typeof frame !== 'undefined' ? frame : new Frame();
};

Game.prototype.bowlA = function(numberOfPins) {
  if (this._isEndOfGame()) {return 'Game over: Ten frames played'}
  this._increaseBallCount();
  this._increaseScore(numberOfPins);
  this.framesLog.receivePins(numberOfPins);
}

Game.prototype.getBallCount = function() {
  return this._ballcount;
}

Game.prototype.checkScore = function() {
  return this._score;
}

Game.prototype.seeFrameResults = function() {
  return this.framesLog.getFrameResults();
}

Game.prototype.seeFrameScores = function() {
  return this.framesLog.getFrameScores();
}

Game.prototype._increaseBallCount = function() {
  this._ballcount += 1;
}

Game.prototype._increaseScore = function(numberOfPins) {
  this._score += numberOfPins;
};

Game.prototype._isEndOfGame = function() {
  return (this.framesLog.frames.length >= 10);
};
