function Frame(){
  'use strict'
  this.INITIALSTANDINGPINS = 10
  this.BALL1 = 1
  this.BALL2 = 2
  this._strike = "no";
  this._spare = "no";
  this._regularScore = 0;
  this._bonusScore = 0;
  this._results = [];
}

Frame.prototype._roll = function (standingPins) {
  var roll = new Roll(standingPins)
  return roll._play()
};

Frame.prototype.updateResult = function(result){
  this._results.push(result);
};

Frame.prototype._getRegularScore = function(){
  var sum = 0;
  this._results.forEach(function(value){
    sum += value;
  });
  this._regularScore = sum
  return this._regularScore
};

Frame.prototype._getStrikeBonusScore = function(){
  this._bonusScore = this._regularScore
  return this._bonusScore
};

Frame.prototype._getSpareBonusScore = function(){
  this._bonusScore = this._results[0];
  return this._bonusScore
};

Frame.prototype.checkStrike = function(){
  if (this._results[0] === this.INITIALSTANDINGPINS){
    this._strike = "yes";
  }
};

Frame.prototype.checkSpare = function(){
  this._getRegularScore();
  if (this._regularScore === this.INITIALSTANDINGPINS &&
                                        this._results.length === 2){
    this._spare = "yes";
  }
};

Frame.prototype.getStrikeStatus = function(){
  return this._strike;
};

Frame.prototype.getSpareStatus = function(){
  return this._spare;
};
