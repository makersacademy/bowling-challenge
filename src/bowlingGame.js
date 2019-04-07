function BowlingGame(player) {
  this.player = player;
  this.rollNumber = 0;
  this.frameNumber = 1;
};

BowlingGame.prototype.frame = function(playerRoll) {
  if(playerRoll == 10 && this.frameNumber < 10) {
    return this.frameNumber += 1;
  } else if(playerRoll < 10 && playerRoll > 0 && this.frameNumber <= 10) {
    return this.frameNumber;
  }
};




