function Game(frame) {
  this._ballcount = 0;
  this._score = 0;
  this.framesLog = typeof frame !== 'undefined' ? frame : new Frame();
}

Game.prototype.bowlA = function(numberOfPins) {
  if (this._isEndOfGame()) {return 'Game over: Ten frames played'}
  if (this._isTooManyPins(numberOfPins)) {throw new Error('Nope. Ten pins max per frame')}
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

Game.prototype.totalScore = function() {
  return this.framesLog.totalScore()
};

Game.prototype._increaseBallCount = function() {
  this._ballcount += 1;
}

Game.prototype._increaseScore = function(numberOfPins) {
  this._score += numberOfPins;
};

Game.prototype._isEndOfGame = function() {
  if ((typeof this.framesLog.frames[9] !== 'undefined') && (this.framesLog.frames[9].reduce((a, b) => a + b, 0) === 10)) {
    return false;
  }
  return (this.framesLog.frames.length >= 10);
};

Game.prototype._isTooManyPins = function(numberOfPins) {
  return (this.framesLog.isTooManyPinsInOneFrame(numberOfPins));
};
