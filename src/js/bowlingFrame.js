function Frame(){
  'use strict'
  this.INITIALSTANDINGPINS = 10
  this._strike = "no";
  this._spare = "no";
  this._regularScore = 0;
  this._bonusScore = 0;
  this._results = [];
}

Frame.prototype.roll = function (standingPins) {
  var roll = new Roll(standingPins)
  return roll.play()
};

Frame.prototype.updateResult = function(result){
  this._results.push(result);
};

Frame.prototype.getRegularScore = function(){
  var sum = 0;
  this._results.forEach(function(value){
    sum += value;
  });
  this._regularScore = sum
  return this._regularScore
};

Frame.prototype.getStrikeBonusScore = function(){
  this._bonusScore = this._regularScore
  return this._bonusScore
};

Frame.prototype.getSpareBonusScore = function(){
  this._bonusScore = this._results[0];
  return this._bonusScore
};

Frame.prototype.checkStrike = function(){
  if (this._results[0] === this.INITIALSTANDINGPINS){
    this._strike = "yes";
  }
};

Frame.prototype.checkSpare = function(){
  this.getRegularScore();
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
