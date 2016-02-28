function Frame (roll, frameNumber) {
  this.pinsAvailable = 10 - roll;
  this.rollScores = this.isStrike(roll) ? ['X'] : [roll];
  this.number = frameNumber || 1
}

Frame.prototype.update = function (roll) {
  if (this.isSpare(roll)){
    roll = '/'
  }
  return this.rollScores.push(roll);
};

Frame.prototype.isStrike = function (roll) {
  return roll === 10
};

Frame.prototype.isSpare = function (roll) {
  return (this.rollScores[0] !== 'X') && (this.total(roll) === 10)
};

Frame.prototype.total = function (roll) {
  return this.rollScores[0] + (roll || this.rollScores[1])
};



//
//
// Frame.prototype.isSpare = function (rollScore) {
//   return (this.currentPinsAvailable - rollScore === 0) &&
//   this.scoreSheet[this.currentFrameNumber].length === 1
// };
//
