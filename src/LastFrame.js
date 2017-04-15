function LastFrame() {
  this.totalScore = null;
  this.frameRolls = [];
};

LastFrame.prototype.receiveLastFrameRoll = function(hits) {
  this._pinCountCheck(hits);
  this._thirdRollCheck();
  if(this.frameRolls.length < 2) {
    this.frameRolls.push(hits);
  } else if (this.frameRolls[0] == 10 || (this.frameRolls[0] + this.frameRolls[1]) == 10 ) {
    this.frameRolls.push(hits);
    this._calculateLastFrameScore();
  };
  if(this.frameRolls.length == 2 && (this.frameRolls[0] + this.frameRolls[1]) < 10 ) {
    this._calculateLastFrameScore();
  };
};

LastFrame.prototype._calculateLastFrameScore = function() {
  var toAdd = this.frameRolls.reduce(add, 0);
  function add(a, b) {
      return a + b;
  }
  this.totalScore = toAdd;
};

LastFrame.prototype._thirdRollCheck = function() {
  if((this.frameRolls[0] + this.frameRolls[1]) < 10){
    throw "Not allowed";
  };
}

LastFrame.prototype._pinCountCheck = function(hits) {
  if(typeof(hits) != "number" || hits > 10 || hits < 0){
    throw "Must be a number between 0 and 10";
  } else if(this.frameRolls[0] == 10 && this.frameRolls[1] < 10 && (this.frameRolls[1] + hits) > 10 ){
    throw "Too many pins";
  } else if(this.frameRolls[0] < 10 && this.frameRolls[1] == null && (this.frameRolls[0] + hits) > 10) {
    throw "Too many pins";
  };
};



