function Frame() {
  this.rolls = [];
  this.score = 0;
  this.lastFrame = false;
  this.strike = false;
  this.spare = false;
  this.complete = false;
};

Frame.prototype.addRoll = function(roll) {
  this._validateThrow();
  this._addRollToFrame(roll);
  this._setBonusFlags();
};

Frame.prototype._validateThrow = function() {
if (this._frameComplete() == true || this._lastFrameComplete() == true){
    throw 'Frame already complete';
  }
};

Frame.prototype._setBonusFlags = function() {
  if (this.rolls.length == 1 && this.score == 10) { this.strike = true };
  if (this.rolls.length == 2 && this.score == 10) { this.spare = true};
};

Frame.prototype._addRollToFrame = function(roll) {
  this.rolls.push(roll.pinsDown)
  this.score += roll.pinsDown
  this._checkComplete();
};

Frame.prototype._checkComplete = function() {
  if (this._frameComplete() == true || this._lastFrameComplete() == true){
      this.complete = true;
      return true;
    }

};

Frame.prototype._frameComplete = function() {
  if (this.rolls.length == 2 && this.lastFrame == false){
    return true;
  };
};

Frame.prototype._lastFrameComplete = function() {
  if (this.rolls.length == 2 && this.lastFrame == true && this.strike == false && this.spare == false){
    return true;
  };
};
