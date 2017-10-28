function Game() {
  this._runningScore = 0;
  this._frameCount = 1;
  this._rollCount = 0;
  this._strikes = {};
  this._spares = {};
  this._rolls = {};
};

var game = new Game();

Game.prototype.getScore = function() {
  return this._runningScore;
};

Game.prototype.rollCount = function() {
  return this._rollCount;
};

Game.prototype._saveStrike = function(pins) {
  if (pins == 10) {
    this._strikes[this._frameCount] = true;
  } else {
    this._strikes[this._frameCount] = false;
  }
}

Game.prototype.roll = function(pins) {
  this._rollCount++;
  this._rolls[this._frameCount] = this._rolls[this._frameCount] || 0;
  this._rolls[this._frameCount] += pins;
  //console.log(this._rolls);
  this._saveStrike(pins);
  if (this._rolls[this._frameCount] == 10) {
    this._spares[this._frameCount] = true;
  } else {
    this._spares[this._frameCount] = false;
  };
  //console.log(this._spares[this._frameCount] );
  if (this._rollCount % 2 == 0) this._frameCount++;
  this._runningScore += pins;
};

Game.prototype.frameCount = function() {
  return this._frameCount;
};


Game.prototype.isStrike = function() {
  return this._strikes[this._frameCount];
}

Game.prototype.isSpare = function() {
  console.log("framecount", this._frameCount);
  console.log("spares", this._spares);
  return this._spares[this._frameCount];
}
