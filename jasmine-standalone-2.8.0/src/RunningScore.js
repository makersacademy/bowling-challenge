function RunningScore() {
  this.frameScoresArray = [];
  this.frameTotalHits = [];
  this.frameBonus = [];
  this.displayScore = 0;
  this.runningTotal = 0;
}

RunningScore.prototype.addFrame = function(frame) {
  this.frameScoresArray.push(frame);
}

RunningScore.prototype.pinsHit = function(frame) {
  if(frame.isStrike() || frame.isSpare()) {
    this.frameTotalHits.push(frame.frameScore[0].pinsBowled + frame.frameScore[1].pinsBowled);
  } else {
    this.frameTotalHits.push(frame.frameScore[0].pinsBowled + frame.frameScore[1].pinsBowled);
    this.frameBonus.push(0);
    this.runningTotal = this.frameTotalHits[this.frameTotalHits.length-1] + this.runningTotal;
  }
}

RunningScore.prototype.calcBonus = function(frame) {
  if(this.frameScoresArray[this.frameScoresArray.length-1].isSpare()) {
    this.frameBonus.push(frame.frameScore[0].pinsBowled);
  }
}

RunningScore.prototype.updateScoreDisplay = function(frame) {
  if(frame.isStrike()) {
    this.displayScore = "X";
  } else if (frame.isSpare()) {
    this.displayScore = "/";
  } else {
    this.displyScore = this.runningTotal;
  }
}
