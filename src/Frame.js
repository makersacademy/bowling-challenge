function Frame() {
  this.totalScore = null;
  this.firstRoll = null;
  this.strike = false;
  this.spare = false;
};

Frame.prototype.receiveRoll = function(hits) {
  this._pinCountCheck(hits);
  if(this.firstRoll != null) {
    this.secondRoll = hits;  
  } else if (this._isAStrike(hits)) {
    this.firstRoll = hits;
    this.secondRoll = 0;
  } else {
    this.firstRoll = hits;
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
  this.totalScore = this.firstRoll + this.secondRoll;
  if(this.totalScore == 10 && this.secondRoll != 0) {
    this.spare = true;
  };
};

Frame.prototype._pinCountCheck = function(hits) {
  if(hits>10){
    throw "Must be less than ten";
  } else if(hits < 0){
    throw "Must be a positive number";
  } else if(this.firstRoll != null && (this.firstRoll + hits) > 10) {
    throw "Too many pins";
  }
};