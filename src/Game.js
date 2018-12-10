function Game() {
  this.cur_frame = 0;
  this.cur_roll = 0
  this.ary = [];
  this.wholeGame = [];
  this.totalScore = 0;
  this.score;
  this.pinsDown;
}

Game.prototype.knockDown = function(pins) {
  this.pinsDown = 0;
  this.isNewFrame();
  this.ary.push(pins);
  if (this.isFrameEnd()) {
    for (var i=0; i<this.ary.length; i++) {
      this.pinsDown += this.ary[i];
    }
    this.wholeGame.push(this.ary);
    this.ary = [];
  }
  this.cur_roll += 1
  return this.pinsDown = pins; 
};

Game.prototype.isNewFrame = function() {
  if (!this.ary[0] && this.ary[0]!==0){this.cur_frame++; this.cur_roll = 0};
};

Game.prototype.frameScore = function(frameNo) {
  score = 0;
  var indexNo = frameNo - 1; // the index no of this frame in the wholeGame ary
  if (frameNo === 10) {
    for (var i=0; i<this.wholeGame[indexNo].length; i++) {
      score += this.wholeGame[indexNo][i]
    }
  }
  else {
    if (this.isStrike(this.wholeGame[indexNo])) {
      (this.isStrike(this.wholeGame[indexNo+1]))? score += 20 + this.wholeGame[indexNo+2][0] : score += 10 + this.wholeGame[indexNo+1][0] + this.wholeGame[indexNo+1][1]
    }
    else {
      this.score += (this.wholeGame[(indexNo)][0] + this.wholeGame[(indexNo)][1]);
      if (score < 10) {score}
      else if (score === 10) {
        score += this.wholeGame[indexNo+1][0]
      } 
    }
  }
  this.totalScore += score;
  return score;
};

Game.prototype.isFrameEnd = function() {
  if (this.cur_frame < 10) {
    return (this.ary[0] === 10 || this.ary.length >= 2)
  }
  else if (this.cur_frame === 10 && (this.ary[0] + this.ary[1] < 10)) {
    return (this.ary.length >= 2)
  }
  else if (this.cur_frame === 10){
    return (this.ary.length >= 3)
  }
}

Game.prototype.isStrike = function(ary) {
  return (ary[0] === 10);
}