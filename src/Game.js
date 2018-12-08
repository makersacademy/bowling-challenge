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

    frame = this._getFrame();
    nextFrame = this._getNextFrame();
    nextButOneFrame = this._getNextButOneFrame();

    if (this._isASpare(frame)) {
      this._spareScore(frame, nextFrame);
    } else if (this._isAStrike(frame)) {
      this._strikeScore(frame, nextFrame, nextButOneFrame)
    } else {
      this._regularScore(frame);
    }
  }

  return this._score;
}

Game.prototype._getFrame = function() {
  return [this._frames[this._rolls], this._frames[this._rolls+1]];
};

Game.prototype._getNextFrame = function() {
  return [this._frames[this._rolls+2], this._frames[this._rolls+3]];
};

Game.prototype._getNextButOneFrame = function() {
  return [this._frames[this._rolls+4], this._frames[this._rolls+5]];
};

Game.prototype._isASpare = function(frame) {
  if (frame[0] + frame[1] === 10) return true;
};

Game.prototype._spareScore = function(frame, nextFrame) {
  this._score += (10 + nextFrame[0]);
  this._incrementIndex();
};

Game.prototype._isAStrike = function(frame) {
  if (frame[0] === 10) return true;
};

Game.prototype._strikeScore = function(frame, nextFrame, nextButOneFrame) {
  if (this._isATripleStrike(nextFrame, nextButOneFrame)) {
    this._score += 30;
  } else if (this._isAStrike(nextFrame)) {
    this._score += (20 + nextButOneFrame[0]);
  } else {
    this._score += (10 + nextFrame[0] + nextFrame[1]);
  }
  this._incrementIndex();
};

Game.prototype._isATripleStrike = function(nextFrame, nextButOneFrame) {
  if (this._isAStrike(nextFrame) && this._isAStrike(nextButOneFrame)) return true;
};

Game.prototype._regularScore = function(frame) {
  this._score += (frame[0] + frame[1]);
  this._incrementIndex();
};

Game.prototype._incrementIndex = function() {
  this._rolls += 2;
};
