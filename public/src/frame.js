function Frame() {
  this.throwCount = 0;
  this.throwScores = [];
  // this.score = 0;
  // this.inProgress = true;
}

Frame.prototype.inProgress = function () {
  if(this.throwCount < 2)
    return true;
  else {
    return false;
  };
};

Frame.prototype.trackThrow = function (pinsDown) {
  if(pinsDown === 10) {
    this.throwCount += 2;
  }
  this.throwScores.push(pinsDown)
  this.throwCount ++;
};

Frame.prototype.calculateScore = function() {
  var cumulativeScore = 0;
  for(var i =0; i < this.throwScores.length; i++ ) {
    cumulativeScore += this.throwScores[i];
  }
  return cumulativeScore;
};

Frame.prototype.isStrike = function () {
  return (this.calculateScore() === 10 && this.throwScores.length < 2);
  // if(this.calculateScore() === 10 && this.throwScores.length < 2) {
  //   return true;
  // };
};

Frame.prototype.isSpare = function () {
  return (this.calculateScore() === 10 && this.throwScores.length === 2);
};
