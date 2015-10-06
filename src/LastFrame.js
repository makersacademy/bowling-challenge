function LastFrame() {
  this.totalScore = null;
  this.frameScore = [];
};

LastFrame.prototype.receiveLastFrameRoll = function(hits) {
  if((this.frameScore[0] + this.frameScore[1]) < 10){
    throw "Not allowed";
  };
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

LastFrame.prototype._isAStrike = function(hits) {
  if(hits == 10){
    this.strike = true;
    return true;
  } else {
    return false;
  };
};

LastFrame.prototype._calculateLastFrameScore = function() {
  var toAdd = this.frameScore.reduce(add, 0);
  function add(a, b) {
      return a + b;
  }
  this.totalScore = toAdd;
};



