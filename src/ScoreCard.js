function ScoreCard () {
  this.rollNumber = 1;
  this.frameNumber = 1;
  this.rollScore = 0;
  this.runningScore = 0;
  this.strikeOrSpare = false;
}

ScoreCard.prototype.addScore = function() {
  if (this.rollNumber == 1) {
    this.rollScore += arguments;
    this.rollNumber ++;
  } else {
    this.runningScore += this.rollScore + arguments;
    this.frameNumber ++;
    this.rollNumber = 1;
  }
}
