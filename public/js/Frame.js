(function(exports){

'use strict';

function Frame (){
  this.rolls = [new Roll(), new Roll()];
}

Frame.prototype.isDone = function() {
  return (
          this.hasStrike() ||
          (this.getRolls().every(roll => (roll.isSet() === true)))
        );
};

Frame.prototype.isSpare = function() {
  return (this.getRolls().every(roll => (roll.isSet() === true)) &&
          this.calculateFrameScore() === 10);
};

Frame.prototype.getRolls = function() {
  return this.rolls;
};

Frame.prototype.play = function(pinsKnocked) {
  this._currentRoll().setPinsKnocked(pinsKnocked);
};

Frame.prototype._currentRoll = function() {
  var currentRoll = this.getRolls().find(function(roll){
    return roll.isSet() === false;
  });
  return currentRoll;
};

Frame.prototype.calculateFrameScore = function() {
  return this.getRolls().reduce(function(acc, roll){
    return acc + roll.getPinsKnocked();
  }, 0);
};

Frame.prototype.hasStrike = function(){
  return this.getRolls()[0].isStrike();
};

Frame.prototype.getRollScore = function (index) {
  return this.getRolls()[index].getPinsKnocked();
};

exports.Frame = Frame;
})(this);
