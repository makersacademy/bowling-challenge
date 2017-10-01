function Bowling() {
  this.score = 0;
  this.firstBowlScore = 0;
  this.secondBowlScore = 0;
  this.turnTotalScore = 0;
}

Bowling.prototype.turnScore = function() {
  this.turnTotalScore = (this.firstBowlScore + this.secondBowlScore);
};

Bowling.prototype.firstBowl = function(score) {
  this.firstBowlScore = score;
};

Bowling.prototype.secondBowl = function(score) {
  this.secondBowlScore = score;
  this.turnScore();
};
