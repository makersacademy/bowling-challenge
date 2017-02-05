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
  return this._frame.getFrame();
};

Game.prototype.getFrames = function() {
  return this._frames;
};

Game.prototype.getLength = function() {
  return this.getFrames().length;
}

// Object actions

Game.prototype.roll = function(pins) {
  this._validateRoll(pins);

  this._frame.addRoll(pins);
  this._addToRolls(pins);

  this._setScore(pins);

  if (this._frame.isStrike()) { this._frame.addRoll(0); }
  if (this._frame.isComplete()) { this._closeFrame(this.getFrame()); }

  try {
    this._checkGameOver();
  }
  catch(err) {
    var errorMessage = err;
  }
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

Game.prototype._closeFrame = function(frame) {
  this._frames.push(frame);
  this._frame = new Frame();
};

// Internal actions

Game.prototype._checkSpare = function(frame) {
  if (!this._checkStrike(frame)) {
    return (this._sumFrame(frame) === 10);
  }
};

Game.prototype._checkStrike = function(frame) {
  if (typeof frame !== 'undefined') { return (frame[0] === 10); }
};

Game.prototype._scoreSpare = function(points) {
  if (this._checkSpare(this._getLastFrame()) && this._checkNewFrame() ) {
    this._score += points;
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

Game.prototype._sumFrame = function(frame) {
  if (typeof frame !== 'undefined') { return ((frame[0]) + (frame[1])); }
};

Game.prototype._checkNewFrame = function() {
  return (this._frame.isNew());
};

Game.prototype._getLastFrame = function() {
  return this.getFrames().slice(-1)[0]
};

Game.prototype._validateRoll = function(roll) {
  if (roll > 10) {
    throw Error('Out of range: maximum roll is 10');
  }
  if (this._checkNewFrame() && this.getFrame()[0] + roll > 10) {
    throw Error('Out of range: maximum roll total for a frame is 10');
  }
};

Game.prototype._checkGameOver = function() {
  if (this.getLength() >= 10 && !this._checkBonusFrames()) {
    throw Error('Game over!');
  }
  if (this.getLength() >= 11 && this._checkSpare(this._getLastFrame())) {
    throw Error('Game over!');
  }
  if (this.getLength() >= 12 && this._checkStrike(this._getLastFrame())) {
    throw Error('Game over!');
  }
};

Game.prototype._checkBonusFrames = function() {
  return (this._checkStrike(this._getLastFrame()) || this._checkSpare(this._getLastFrame()));
}
