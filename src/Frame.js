(function(exports){

'use strict';

function Frame (numberOfRolls = 2){
  this.numberOfRolls = numberOfRolls;
  this.rolls = [];
  for(var x = 0; x < this.numberOfRolls; x++) {
    this.rolls.push(new Roll());
  }
}

Frame.prototype.isDone = function() {
  if (this.getRolls().length === 3){
    if ( !this.hasStrike() &&
            this.getRolls()[0].isSet() &&
            this.getRolls()[1].isSet() &&
            !(this.calculateFrameScore() === 10)) {
          return true;
      }
  }
  return (
          (this.getRolls().length === 2 && this.getRolls()[0].isStrike()) ||
          (this.getRolls().every(roll => (roll.isSet() === true)))
        );
};

Frame.prototype.isSpare = function() {
  return (this.calculateFrameScore() === 10);
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
  if(this.hasStrike()) {
    return 10;
  }

  var frameScore = 0
  for (var index = 0; index < 2; index++) {
    frameScore += this.getRolls()[index].getPinsKnocked()
  }
  return frameScore
};

Frame.prototype.hasStrike = function(){
  return this.getRolls()[0].isStrike();
};

exports.Frame = Frame;
})(this);
