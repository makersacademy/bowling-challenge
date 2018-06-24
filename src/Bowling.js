function Game() {
  this.frames = [];
  this.frame = [];
  this.pins = 10;
  this.finalFrame = false;
  this.frameScore = 0;
  this.finish = false;
}

Game.prototype.bowl = function bowl(score) {
  this._gameOver();
  this._validScore(score);
  this.frame.push(score);
  this.pins -= score;
  this._endFrame();
};

Game.prototype.score = function score(frame) {
  let total = 0;
  for (i = 1; i <= frame; i += 1) {
    this.frameScore = 0;
    this._calcFrame(i);
    total += this.frameScore;
  }
  return total;
};

Game.prototype._gameOver = function _gameOver() {
  if (this.finish === true) {
    throw new Error('Game has finished, start a new game');
  }
};

Game.prototype._endFrame = function _endFrame() {
  if (this.finalFrame === false) {
    this._endTurn();
  } else {
    this._endGame();
    this._resetPins();
  }
};

Game.prototype._endTurn = function _endTurn() {
  if (this.pins === 0 || this.frame.length === 2) {
    this._runFrame(this.frame);
    this.frame = [];
    this.pins = 10;
  }
};

Game.prototype._endGame = function _endGame() {
  if ((this.frame.length === 2 && (this.frame[0] + this.frame[1]) < 10) ||
  this.frame.length === 3) {
    this.finish = true;
    this.frames.push(this.frame);
    this.frame = [];
    this.pins = 10;
  }
};

Game.prototype._resetPins = function _resestPins() {
  if (this.pins < 1) {
    this.pins = 10;
  }
};

Game.prototype._runFrame = function _runFrame(frame) {
  this.frames.push(frame);
  this._setFrame();
};

Game.prototype._validScore = function _validScore(score) {
  if (score > this.pins) {
    throw new Error('please enter a valid score');
  }
};

Game.prototype._setFrame = function _setFrame() {
  if (this.frames.length === 9) {
    this.finalFrame = !this.finalFrame;
  }
};

Game.prototype._calcFrame = function _calcFrame(frame) {
  this._frameNotComplete(frame);
};

Game.prototype._frameNotComplete = function _frameNotComplete(frame) {
  if (frame > this.frames.length && this.frame.length === 1) {
    this.frameScore = this.frame[0];
  } else if (frame > this.frames.length && this.finalFrame === true && this.finish === false) {
    this._finalFrameCheck(frame);
  } else if (frame > this.frames.length) {
    // empty
  } else {
    this._frameComplete(frame);
  }
};

Game.prototype._frameComplete = function _frameComplete(frame) {
  for (x = 0; x < this.frames[frame - 1].length; x += 1) {
    this.frameScore += this.frames[frame - 1][x];
  }
  this._strike(frame);
};

Game.prototype._strike = function _strike(frame) {
  if (this.frameScore === 10 && this.frames[frame - 1][0] === 10 && this.frames.length > frame) {
    let frameLength;
    if (this.frames[frame].length > 2) {
      frameLength = 2;
    } else { frameLength = this.frames[frame].length; }
    for (y = 0; y < frameLength; y += 1) {
      this.frameScore += this.frames[frame][y];
    }
    if (this.frames[frame][0] === 10 && this.frames.length > (frame + 1) && frame !== 9) {
      this.frameScore += this.frames[frame + 1][0];
    }
  } else if (this.frameScore === 10 && this.frames.length > frame) {
    this._spare(frame);
  }
};

Game.prototype._spare = function _spare(frame) {
  this.frameScore += this.frames[frame][0];
};

Game.prototype._finalFrameCheck = function _finalFrameCheck(frame) {
  if (this.frame.length === 2) {
    this.frameScore = this.frame[0] + this.frame[1];
  } else if (this.frame.length === 1) { this.frameScore = this.frame[0]; } else {
    // empty
  }
}
