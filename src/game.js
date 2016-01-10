function Game(frame) {
  this._ballcount = 0;
  this._score = 0;
  this.framesLog = typeof frame !== 'undefined' ? frame : new Frame();
};

Game.prototype.bowlA = function(numberOfPins) {
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

Game.prototype._increaseBallCount = function() {
  this._ballcount += 1;
}

Game.prototype._increaseScore = function(numberOfPins) {
  this._score += numberOfPins;
};
