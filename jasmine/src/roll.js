function Roll(){
    this.frameScore = [];
    this.isStrike = false;
    this.isSpare = false;
}

var score;

Roll.prototype.rollOne = function(score1) {
  this.score1 = score1;

  if (score1 == 10) {
    this.isStrike = true;
  }
  this.addScore(score1, this.isStrike);
};

Roll.prototype.rollTwo = function(score2) {
  this.score2 = score2; // gets score from rollTwo
  if (score2 + this.frameScore[0] == 10){ this.isSpare = true}
  this.addScore(score2, this.isSpare);
};

Roll.prototype.addScore = function (score, status) {
  this.frameScore.push(score, status);
};
