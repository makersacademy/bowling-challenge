function Frame() {
  this.totalScore = null;
  this.frameRolls = [];
  this.strike = false;
  this.spare = false;
};

Frame.prototype.receiveRoll = function(hits) {
  this._pinCountCheck(hits);
  if(this.frameRolls[0] != null) {
    this.frameRolls[1] = hits;  
  } else if (this._isAStrike(hits)) {
    this.frameRolls[0] = hits;
    this.frameRolls[1] = 0;
  } else {
    this.frameRolls[0] = hits;
  };
  this._calculateScore();
};

Frame.prototype._isAStrike = function(hits) {
  if(hits == 10){
    this.strike = true;
    return true;
  } else {
    return false;
  };
};

Frame.prototype._calculateScore = function() {
  this.totalScore = this.frameRolls[0] + this.frameRolls[1];
  if(this.totalScore == 10 && this.frameRolls[1] != 0) {
    this.spare = true;
  };
};

Frame.prototype._pinCountCheck = function(hits) {
  if(typeof(hits) != "number" || hits > 10 || hits < 0){
    throw "Must be a number between 0 and 10";
  } else if(this.frameRolls[0] != null && (this.frameRolls[0] + hits) > 10) {
    throw "Too many pins";
  }
};