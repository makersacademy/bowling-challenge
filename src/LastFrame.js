function LastFrame() {
  this.totalScore = 0;
  this.firstRoll = null;
  this.frameScore = [];
};

LastFrame.prototype.receiveLastFrameRoll = function(hits) {
  if((this.frameScore[0] + this.frameScore[1]) < 10){
    throw "Not allowed";
  };
  if(this.frameScore.length <= 2) {
    this.frameScore.push(hits);
  } else if (this.frameScore[0] == 10 || (this.frameScore[0] + this.frameScore[1]) == 10 ) {
    this.frameScore.push(hits);
  };
  this._calculateLastFrameScore();
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

// if(this.firstRoll != null) {
//     this.secondRoll = hits;  
//   } else if (this._isAStrike(hits)) {
//     this.firstRoll = hits;
//     this.secondRoll = 0;
//   } else {
//     this.firstRoll = hits;
//   };
//   this._calculateScore()

// if(this.firstRoll == 10) {
//     this.secondRoll = hits;
//   } else if (this.firstRoll + this.secondRoll == 10) {
//     this.thirdRoll = hits;
//   } else if (this.firstRoll != null) {
//     this.secondRoll = hits;
//   } else {
//     this.firstRoll = hits;
//   }
//   this._calculateLastFrameScore();

