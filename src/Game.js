function Game() {
  this._score  = new Score();
  this._frames = [];

  this._rolls  = [];
  this._frame  = new Frame();

  this._TOTAL_FRAMES = 10;
}

Game.prototype.getScore = function() {
  return this._score._total;
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

Game.prototype.closeFrame = function(frame) {
  this._frames.push(frame);
  this._frame = new Frame();
};

Game.prototype.roll = function(pins) {
  this._frame.isWrong(pins);
  this._frame.addRoll(pins);
  this._score.setScore(pins, this.lastFrame(), this.getFrame(), this.getLength());

  if (this._frame.isStrike()) { this._frame.addRoll(0); }
  if (this._frame.isComplete()) { this.closeFrame(this._frame); }

  this.isOver();
};

Game.prototype.isOver = function() {
  try { this.isComplete(); }
  catch(err) { var errorMessage = err; }
}

Game.prototype.extraFrame = function() {
  return (this.lastFrame().isStrike() || this.lastFrame().isSpare());
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
