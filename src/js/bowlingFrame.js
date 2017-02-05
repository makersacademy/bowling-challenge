function Frame(){
  'use strict'
  this.INITIALNUMBERPINS = 10
  this._results = [];
  this._strike = "no";
  this._spare = "no";
  this._regularScore = 0;
  this._bonusScore = 0;
}

Frame.prototype.roll = function (numberOfPins) {
  var roll = new Roll(numberOfPins)
  return roll.play()
};

Frame.prototype.isAnotherRoll = function (result) {
  var anotherRoll = result === 10 ? false : true;
  return anotherRoll
};

Frame.prototype.updateResult = function(result){
  this._results.push(result);
};

Frame.prototype.playFrame = function () {
  var firstRoll = this.roll(this.INITIALNUMBERPINS);
  this.updateResult(firstRoll);
  this.checkStrike();
  if(this.isAnotherRoll(firstRoll) === true){
    var leftPins = this.INITIALNUMBERPINS - firstRoll;
    var secondRoll = this.roll(leftPins);
    this.updateResult(secondRoll);
    this.checkSpare();
  }
  return this._results
};

Frame.prototype.getRegularScore = function(){
  var sum = 0;
  this._results.forEach(function(value){
    sum += value;
  });
  this._regularScore = sum
  return this._regularScore
};

Frame.prototype.getBonusScore = function(){
  return this._bonusScore;
};

Frame.prototype.getStrikeBonusScore = function(){
  this._bonusScore = this._regularScore
  return this._bonusScore
};

Frame.prototype.getSpareBonusScore = function(){
  this._bonusScore = this._results[0];
  return this._bonusScore
};

Frame.prototype.getStrikeStatus = function(){
  return this._strike;
};

Frame.prototype.checkStrike = function(){
  if (this._results[0] === 10){
    this._strike = "yes";
  }
};

Frame.prototype.getSpareStatus = function(){
  return this._spare;
};

Frame.prototype.checkSpare = function(){
  this.getRegularScore();
  if (this._regularScore === 10 && this._results.length === 2){
    this._spare = "yes";
  }
};

Frame.prototype.lastGameAdditionalsWhenStrike = function(){
  var firstRoll = this.roll(this.INITIALNUMBERPINS);
  this.updateResult(firstRoll);
  if(this.isAnotherRoll(firstRoll) === true){
    var leftPins = this.INITIALNUMBERPINS - firstRoll;
    var secondRoll = this.roll(leftPins);
    this.updateResult(secondRoll);
  } else if (this.isAnotherRoll(firstRoll) === false){
    var secondRoll = this.roll(this.INITIALNUMBERPINS);
    this.updateResult(secondRoll);
  }
};
