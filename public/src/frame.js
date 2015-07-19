function Frame(isFinalFrame) {
  this.bowlCount = 0;
  this.bowlScores = [];
  //if no parameter passed in, isFinalFrame will be set to default of false
  this.isFinalFrame = isFinalFrame || false;
}

Frame.prototype.trackBowl = function(pinsDown) {
  if(pinsDown === 10) {
    this.bowlCount += 2;
  }
  this.bowlScores.push(pinsDown)
  this.bowlCount ++;
};

// rollTotal = calculateScore

Frame.prototype.calculateScore = function() {
  var cumulativeScore = 0;
  for(var i =0; i < this.bowlScores.length; i++ ) {
    cumulativeScore += this.bowlScores[i];
  }
  return cumulativeScore;
};

Frame.prototype.isStrike = function() {
  return (this.bowlScores[0] === 10);
};

Frame.prototype.isSpare = function() {
  return (this.bowlScores[0] < 10) && (this.calculateScore() === 10);
};

Frame.prototype.addBonus = function() {
  return (this.isSpare()) || (this.isStrike());
  // if(this.isSpare() || this.isStrike()) {
  //   return true;
  // }
  // return false;
};

Frame.prototype.bowlsPerFrame = function() {
  if(isFinalFrame === true) {
    return bowlCount === 3;
  }
  else {
    return bowlCount === 2;
  }
};

Frame.prototype.isOver = function() {
  if(this.bowlCount < 2)
    return false;
  else {
    return true;
  };
};
