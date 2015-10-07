function LastFrame() {
  this.totalScore = null;
  this.frameScore = [];
};

LastFrame.prototype.receiveLastFrameRoll = function(hits) {
  this._pinCountCheck(hits);
  this._thirdRollCheck();
  if(this.frameScore.length < 2) {
    this.frameScore.push(hits);
  } else if (this.frameScore[0] == 10 || (this.frameScore[0] + this.frameScore[1]) == 10 ) {
    this.frameScore.push(hits);
    this._calculateLastFrameScore();
  };
  if(this.frameScore.length == 2 && (this.frameScore[0] + this.frameScore[1]) < 10 ) {
    this._calculateLastFrameScore(); 
  };
};

LastFrame.prototype._calculateLastFrameScore = function() {
  var toAdd = this.frameScore.reduce(add, 0);
  function add(a, b) {
      return a + b;
  }
  this.totalScore = toAdd;
};

LastFrame.prototype._thirdRollCheck = function() {
  if((this.frameScore[0] + this.frameScore[1]) < 10){
    throw "Not allowed";
  };
}

LastFrame.prototype._pinCountCheck = function(hits) {
  if(typeof(hits) != "number" || hits > 10 || hits < 0){
    throw "Must be a number between 0 and 10";
  } else if(this.frameScore[0] == 10 && this.frameScore[1] < 10 && (this.frameScore[1] + hits) > 10 ){
    throw "Too many pins";
  } else if(this.frameScore[0] < 10 && this.frameScore[1] == null && (this.frameScore[0] + hits) > 10) {
    throw "Too many pins";
  };
};



