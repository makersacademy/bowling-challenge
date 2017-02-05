function Game() {
  this._score  = 0;
  this._rolls  = [];

  this._frame  = [];
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

// Object actions

Game.prototype.roll = function(pins) {
  this._validateRoll(pins);

  this._addToFrame(pins);
  this._addToRolls(pins);

  this._setScore(pins);

  if (this._checkStrike(this._frame)) { this._addToFrame(0); }
  if (this.getFrame().length === 2)   { this._closeFrame(this.getFrame()); }

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

Game.prototype._addToFrame = function(roll) {
  this._frame.push(roll);
};

Game.prototype._addToRolls = function(roll) {
  this._rolls.push(roll);
};

Game.prototype._closeFrame = function(frame) {
  this._frames.push(frame);
  this._frame = [];
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
  if (this.getFrames().length < 10 && this.getRolls().length > 1 && this.getRolls().slice(-2)[0] === 10) {
    this._score += points;
  }
  if (this.getFrames().length < 11 && this.getRolls().length > 2 && this.getRolls().slice(-3)[0] === 10) {
    this._score += points;
  }
}

Game.prototype._sumFrame = function(frame) {
  if (typeof frame !== 'undefined') { return ((frame[0]) + (frame[1])); }
};

Game.prototype._checkNewFrame = function() {
  return (this.getFrame().length === 1);
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
  if (this._frames.length >= 10 && !this._checkBonusFrames()) {
    throw Error('Game over!');
  }
};

Game.prototype._checkBonusFrames = function() {
  return (this._checkStrike(this._getLastFrame()) || this._checkSpare(this._getLastFrame()));
}
