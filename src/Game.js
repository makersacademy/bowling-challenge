function Game() {
  this._score = 0;
  this._rolls = [];
  this._frame = [];

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

// Object actions

Game.prototype.roll = function(pins) {
  this._addRoll(pins);
  this._setScore(pins);
  if (this._checkStrike(this._frame)) { this._addRoll(0); }
  if (this.getFrame().length === 2) {
    this._closeFrame(this.getFrame());
    this._openFrame();
  }
};

// ----------- PRIVATE ------------

// Altering properties

Game.prototype._setScore = function(points) {
  if (!this._checkNewFrame() && this._checkStrike(this._getLastFrame())) {
    this._score += this._sumFrame(this._frame);
  }
  else if (this._checkSpare(this._getLastFrame()) && this._checkNewFrame() ) {
    this._score += points;
  }
    this._score += points;
};

Game.prototype._addRoll = function(roll) {
  this._frame.push(roll);
};

Game.prototype._closeFrame = function(frame) {
  this._rolls.push(frame);
};

Game.prototype._openFrame = function() {
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

Game.prototype._sumFrame = function(frame) {
  if (typeof frame !== 'undefined') { return ((frame[0]) + (frame[1])); }
};

Game.prototype._checkNewFrame = function() {
  return (this.getFrame().length === 1);
};

Game.prototype._getLastFrame = function() {
  return this.getRolls().slice(-1)[0]
};
