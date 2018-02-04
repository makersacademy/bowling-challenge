function Roll(frame, roll){
  this.frameScore = [];
  this.isStrike = false;
  this.isSpare = false;
};


Roll.prototype.roll = function(score, roll) {
  if (score == 10) {
    this.isStrike = true;
  }
  this.addScore(score, this.isStrike);
};

Roll.prototype.rollTwo = function(score2) {

  if (score2 + this.frameScore[0] == 10){ this.isSpare = true}
  this.addScore(score2, this.isSpare);
};

Roll.prototype.addScore = function (score, status) {
  this.frameScore.push(score, status);
};
