/*jshint esversion: 6 */

function Frame(){
  this.pins = 10
  this.rolls = []
  this._rollsLeft = 2
}

Frame.prototype.getPins = function () {
  return this.pins;
};

Frame.prototype.roll = function (score) {
  if(this._rollsLeft===0){throw new Error("No rolls left")}
  if(this.pins<score){throw new Error("Invalid roll")}
  this._setRollsLeft(score)
  this.rolls.push(score);
  this.pins -= score;
};

Frame.prototype.getRolls = function () {
  return this.rolls
};

Frame.prototype._setRollsLeft = function (score) {
  this._rollsLeft = score === 10 ?  0 : this._rollsLeft - 1
};

Frame.prototype.isSpare = function () {
  return this._knockedDownTenIn(2)
};

Frame.prototype.isStrike = function () {
  return this._knockedDownTenIn(1)
};

Frame.prototype._knockedDownTenIn = function(numberOfRolls){
  return this.rolls.length === numberOfRolls &&
         this.rolls.reduce((pv,cv) => pv + cv) === 10
};
