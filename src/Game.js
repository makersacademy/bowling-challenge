function Game() {
  this._frames = [];
  this._score = 0;
  this._rolls = 0;
}

Game.prototype.frames = function() {
  return this._frames;
};

Game.prototype.roll = function(pins) {
  this._frames.push(pins);
};

Game.prototype.score = function() {
  var i;
  for (var i = 0; i < 10; i++) {
    if (this._isASpare(this._currentFrame())) {
      this._spareScore(this._nextFrame());
    } else if (this._isAStrike(this._currentFrame())) {
      this._strikeScore(this._nextFrame(), this._nextButOneFrame());
    } else {
      this._regularScore(this._currentFrame());
    }
  }
  return this._score;
}

Game.prototype._currentFrame = function() {
  return [this._frames[this._rolls], this._frames[this._rolls+1]];
};

Game.prototype._nextFrame = function() {
  return [this._frames[this._rolls+2], this._frames[this._rolls+3]];
};

Game.prototype._nextButOneFrame = function() {
  return [this._frames[this._rolls+4], this._frames[this._rolls+5]];
};

Game.prototype._isASpare = function(frame) {
  if (frame[0] + frame[1] === 10) return true;
};

Game.prototype._spareScore = function(nextFrame) {
  this._score += (10 + nextFrame[0]);
  this._incrementRolls();
};

Game.prototype._isAStrike = function(frame) {
  if (frame[0] === 10) return true;
};

Game.prototype._strikeScore = function(nextFrame, nextButOneFrame) {
  if (this._isATripleStrike(nextFrame, nextButOneFrame)) {
    this._score += 30;
  } else if (this._isAStrike(nextFrame)) {
    this._score += (20 + nextButOneFrame[0]);
  } else {
    this._score += (10 + nextFrame[0] + nextFrame[1]);
  }
  this._incrementRolls();
};

Game.prototype._isATripleStrike = function(nextFrame, nextButOneFrame) {
  if (this._isAStrike(nextFrame) && this._isAStrike(nextButOneFrame)) return true;
};

Game.prototype._regularScore = function(frame) {
  this._score += (frame[0] + frame[1]);
  this._incrementRolls();
};

Game.prototype._incrementRolls = function() {
  this._rolls += 2;
};
