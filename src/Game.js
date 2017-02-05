function Game() {
  this._rolls  = [];

  this._score  = 0;

  this._frame  = new Frame();
  this._frames = [];

  this._TOTAL_FRAMES = 10;
}

// ------------ PUBLIC ------------

// Accessing properties

Game.prototype.getScore = function() {
  return this._score;
};

Game.prototype.getRolls = function() {
  return this._rolls;
};

Game.prototype.getFrame = function() {
  return this._frame;
};

Game.prototype.getFrames = function() {
  return this._frames;
};

Game.prototype.getLength = function() {
  return this.getFrames().length;
}

Game.prototype.lastFrame = function() {
  return this.getFrames().slice(-1)[0]
};

// Object actions

Game.prototype.roll = function(pins) {
  this._frame.isWrong(pins);

  this._frame.addRoll(pins);
  this._addToRolls(pins);

  this._setScore(pins);

  if (this._frame.isStrike()) { this._frame.addRoll(0); }
  if (this._frame.isComplete()) { this._close(this._frame); }
  this.isOver();
};

// ----------- PRIVATE ------------

// Altering properties

Game.prototype._setScore = function(points) {
  this._scoreStrike(points);
  this._scoreSpare(points);
  this._score += points;
};

Game.prototype._addToRolls = function(roll) {
  this._rolls.push(roll);
};

Game.prototype._close = function(frame) {
  this._frames.push(frame);
  this._frame = new Frame();
};

// Internal actions

Game.prototype._scoreSpare = function(points) {
  if (typeof this.lastFrame() !== 'undefined') {
    if (this.lastFrame().isSpare() && this._frame.isNew()) {
      this._score += points;
    }
  }
}

Game.prototype._scoreStrike = function(points) {
  if (this.getRolls().length === 1 && this.getRolls().slice(-1)[0] === 10) {
    return 'undefined';
  }
  if (this.getLength() < 10 && this.getRolls().length > 1 && this.getRolls().slice(-2)[0] === 10) {
    this._score += points;
  }
  if (this.getLength() < 11 && this.getRolls().length > 2 && this.getRolls().slice(-3)[0] === 10) {
    this._score += points;
  }
}

Game.prototype.isComplete = function() {
  if (this.getLength() >= 10 && !this.extraFrame()) {
    throw Error('Game over!');
  }
  if (this.getLength() >= 11 && this.lastFrame().isSpare()) {
    throw Error('Game over!');
  }
  if (this.getLength() >= 12 && this.lastFrame().isStrike()) {
    throw Error('Game over!');
  }
};

Game.prototype.isOver = function() {
  try { this.isComplete(); }
  catch(err) { var errorMessage = err; }
}

Game.prototype.extraFrame = function() {
  return (this.lastFrame().isStrike() || this.lastFrame().isSpare());
}
