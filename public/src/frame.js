function Frame() {
  this.throwCount = 0;
  this.throwScores = [];
  this.isFinalFrame = false;

}

Frame.prototype.trackThrow = function(pinsDown) {
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

Frame.prototype.isStrike = function() {
  return (this.throwScores[0] === 10);
};

Frame.prototype.isSpare = function() {
  return (this.throwScores[0] < 10) && (this.calculateScore() === 10);
};

Frame.prototype.addBonus = function() {
  return (this.isSpare()) || (this.isStrike());
  // if(this.isSpare() || this.isStrike()) {
  //   return true;
  // }
  // return false;
};

Frame.prototype.throwsPerFrame = function() {
  if(isFinalFrame === true) {
    return throwCount === 3;
  }
  else {
    return throwCount === 2;
  }
};

Frame.prototype.isOver = function() {
  if(this.throwCount < 2)
    return false;
  else {
    return true;
  };
};
