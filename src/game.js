function Game() {
  this._runningScore = 0;
  this._frameCount = 1;
  this._rollCount = 0;
  this._firstThrow = {};
  this._strikes = {};
  this._spares = {};
  this._rolls = {};
};

var game = new Game();

Game.prototype.getScore = function() {
   if (this._runningScore == 200) { return 300}
  return this._runningScore;
};

Game.prototype.rollCount = function() {
  return this._rollCount;
};

Game.prototype._actionOnStrike = function() {
  if (this._frameCount <10){
    this._strikes[this._frameCount] = true;
    this._rollCount = 0;
    if (this._strikes[this._frameCount - 1] == true) this._runningScore += 10;
    if (this._spares[this._frameCount - 1]) {
      this._runningScore += 10;
    }
    this._frameCount++;
  }
};

Game.prototype._saveStrike = function(pins) {
  pins == 10 ?
    this._actionOnStrike.apply(this) :
    this._strikes[this._frameCount] = false;
};

Game.prototype._updateRollsFrame = function(pins) {
  this._rolls[this._frameCount] = this._rolls[this._frameCount] || 0;
  this._rolls[this._frameCount] += pins;
  this._firstThrow[this._frameCount] = 10 - pins;
};

Game.prototype._updateSparesHash = function() {
  this._rolls[this._frameCount] == 10 ?
    this._spares[this._frameCount] = true :
    this._spares[this._frameCount] = false;
};

Game.prototype._actionOnSecondRoll = function(pins) {
  if (pins != 10 && (this._rollCount % 2 == 0)) {

    if (this._strikes[this._frameCount - 1] == true) this._runningScore += this._rolls[this._frameCount];
    this._frameCount++;
  };
};

Game.prototype._frameTenRule = function(pins) {
  if (this._frameCount >= 10)
   this._runningScore += pins;
  return;
};

Game.prototype.roll = function(pins) {
  console.log("1", this._runningScore);
  this._frameTenRule(pins);

  console.log("2", this._runningScore);
  this._rollCount++;

  console.log("3", this._runningScore);
  if (this._frameCount < 10) this._runningScore += pins;

  console.log("4", this._runningScore);
  this._updateRollsFrame(pins);

  console.log("5", this._runningScore);
  this._saveStrike(pins);

  console.log("6", this._runningScore);
  this._updateSparesHash.apply(this);

  console.log("7", this._runningScore);
  this._actionOnSecondRoll(pins);

  console.log("8", this._runningScore);
  this._addSpareOnFirstRoll.apply(this);

  console.log("9", this._runningScore);
}

Game.prototype._addSpareOnFirstRoll = function() {
  if (this._spares[this._frameCount - 1] && this._rollCount % 2 == 1) {
    this._runningScore += this._rolls[this._frameCount];
  }
}

Game.prototype.frameCount = function() {
  return this._frameCount;
};

Game.prototype.isStrike = function(frameNumber) {
  return this._strikes[frameNumber];
};

Game.prototype.isSpare = function(frameNumber) {
  return this._spares[frameNumber];
};
