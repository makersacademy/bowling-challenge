function frame(){
  this.framesScores = [0,0];
  this.isSpare = false;
  this.isStrike = false;
  this.bonus = 0;
  this.finalFrameScore = null;
}

frame.prototype.setFirstRollScore = function(score) {
  this.framesScores[0] = score;
  this.isStrikeScored();
}
frame.prototype.setSecondRollScore = function(score) {
  this.framesScores[1] = score;
  this.isSpareScored();
  this.setFinalFrameScore();
}

frame.prototype.isStrikeScored = function() {
  if (this.framesScores[0] === 10) {this.isStrike = true;
    this.setFinalFrameScore();
    console.log("STRIKE!");
  }
}

frame.prototype.isSpareScored = function() {
  if (this.framesScores[0] + this.framesScores[1] === 10) {
    this.isSpare = true;
    console.log("SPARE!");
  }
}

frame.prototype.setFinalFrameScore = function(score) {
 this.finalFrameScore = this.framesScores[0] +
   this.framesScores[1]+ this.bonus
}

frame.prototype.setBonus = function(bonusValue) {
  this.bonus += bonusValue;
  this.setFinalFrameScore();
}
