function BowlingGame(frame, scoreCard) {
  this.scoreCard = scoreCard;
  this.rollNumber = 0;
  this.frameNumber = 1;
};

BowlingGame.prototype.frame = function(playRoll) {
  if(playRoll == 10 && this.frameNumber < 10) {
    return this.frameNumber += 1;
  } else if(playRoll < 10 && playRoll > 0 && this.frameNumber <= 10) {
    return this.frameNumber;
  }
};










