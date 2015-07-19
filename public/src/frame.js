function Frame() {
  this.throwCount = 0;
  this.throwScores = [];
  // this.isFinalFrame = isFinalFrame || false
  // this.totalThrows = (isFinalFrame ? 3 : 2);

}

Frame.prototype.isOver = function () {
  if(this.throwCount < 2)
    return false;
  else {
    return true;
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

Frame.prototype.throwsPerFrame = function() {

};

Frame.prototype.isStrike = function () {
  return (this.throwScores[0] === 10);
  // return (this.calculateScore() === 10 && this.throwScores.length < 2);
};

Frame.prototype.isSpare = function () {
  return (this.throwScores[0] < 10) && (this.calculateScore() === 10);
  // return (this.calculateScore() === 10 && this.throwScores.length === 2);
};



// Frame.prototype.isOver = function() {
//   for(var i = 0; i < this.totalRolls; i++) {
//     if (this.rolls[i] === 10 && this.isLastFrame === false) return true;
//     if (this.isLastFrame && this.rollsTaken() === 2 && this.rollTotal() < 10) return true;
//     if (this.rolls[i] === '-') return false;
//   }
//   return true;
// };
