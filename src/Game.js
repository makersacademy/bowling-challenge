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

  if (this.getFrame().length === 2) {
    this._addFrame(this.getFrame());
    this._newFrame();
  }
};

// ----------- PRIVATE ------------

// Altering properties

Game.prototype._setScore = function(points) {
  if (this._checkSpare() && this._checkNewFrame() ) {
    this._score += points;
  }
  this._score += points;
};

Game.prototype._addFrame = function(frame) {
  this._rolls.push(frame);
};

Game.prototype._addRoll = function(roll) {
  this._frame.push(roll);
};

Game.prototype._newFrame = function() {
  this._frame = [];
};

// Internal actions

Game.prototype._getLastFrame = function() {
  return this.getRolls().slice(-1)[0]
}

Game.prototype._sumLastFrame = function() {
  if (typeof this._getLastFrame() !== 'undefined') {
    return ((this._getLastFrame()[0]) + (this._getLastFrame()[1]));
  }
};

Game.prototype._checkSpare = function() {
  return (this._sumLastFrame() === 10);
};

Game.prototype._checkNewFrame = function() {
  return (this.getFrame().length === 1);
};
