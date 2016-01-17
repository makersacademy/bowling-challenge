function frame(){
  this.framesScores = [0,0];
  this.isSpare = false;
  this.isStrike = false;
  this.bonus = 0;
  this.finalFrameScore = 0;
}

frame.prototype.setFirstRollScore = function(score) {
  this.framesScores[0] = score;
  this.isStrikeScored();
}

frame.prototype.isStrikeScored = function() {
  if (this.framesScores[0] === 10) {this.isStrike = true;
    this.setFinalFrameScore();
    console.log("STRIKE!");
  }
}

frame.prototype.setFinalFrameScore = function(score) {
 this.finalFrameScore = this.framesScores[0] + this.framesScores[1]+ this.bonus
}
