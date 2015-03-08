var Score = function() {
  this.frames= 10;
  this.frameInPlay = 1;
  this.totalScore = 0;
};

Score.prototype.scoreAdder = function(rollScore) {
  this.totalScore += rollScore
};

Score.prototype.checkTotal = function() {
  console.log(this.totalScore)
  if (this.totalScore < 301) {
    return true
  }else{
    return false
  };
};