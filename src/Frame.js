
function Frame(){
  this.pins = 10
  this.rolls = []
  this._rollsLeft = 2
  this.isFinalFrame = false
}

Frame.prototype.getPins = function () {
  return this.pins;
};

Frame.prototype.roll = function (score) {
  if(this._rollsLeft <= 0){throw new Error("No rolls left")}
  if(this.pins<score){throw new Error("Invalid roll")}
  this._evaluateFrame(score)
  if(this.isFinalFrame){this._evaluateFinalFrame(score)}
};

Frame.prototype._evaluateFrame = function (score) {
  this.rolls.push(score);
  this._setRollsLeft(score)
  this.pins -= score;
};

Frame.prototype._evaluateFinalFrame = function (score) {
  if(this.isStrike() || this.isSpare()){
    this.pins = 10
    this._rollsLeft += 1
  }
  if(this._getFrameScore() === 20){this.pins = 10}
};

Frame.prototype.getRolls = function () {
  return this.rolls
};

Frame.prototype.isSpare = function () {
  return this._knockedDownTenIn(2)
};

Frame.prototype.isStrike = function () {
  return this._knockedDownTenIn(1)
};

Frame.prototype.getIsFinalFrame = function () {
  return this.isFinalFrame;
};

Frame.prototype.setFinalFrame = function () {
  this.isFinalFrame = true
};

Frame.prototype._setRollsLeft = function (score) {
  this._rollsLeft -= 1
  if(this.isStrike() && !this.isFinalFrame){this._rollsLeft = 0}
};

Frame.prototype._getFrameScore = function () {
  return this.rolls.reduce(function(pv,cv){return pv + cv})
};


Frame.prototype._knockedDownTenIn = function(numberOfRolls){
  return this.rolls.length === numberOfRolls && this._getFrameScore() === 10
};
