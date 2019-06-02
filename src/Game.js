function Game() {
  this._totalScore = 0;
  this._frame = 1;
  this._rollsPerFrame = 0;
  };

Game.prototype.roll = function(rollScore) {
  if(rollScore <= 10) {
    this._totalScore += rollScore;
    this._rollsPerFrame ++;
    this.addRoll();
  } else {
    throw new Error("Are you trying to cheat?");
  }
};

Game.prototype.addScore = function() {
  return this._totalScore;
};

Game.prototype.frame = function() {
  return this._frame;
};

Game.prototype.addRoll = function() {
  if(this._rollsPerFrame < 2) {
    this._rollsPerFrame ++;
  } else {
    this._frame ++;
  }
};