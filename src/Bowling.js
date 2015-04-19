var Bowling = function() {
  this.score = 0
  this.bowlingFrame = 1
  this.pinsLeft = 10
};

Bowling.prototype.scoreUp = function(score) {
  this.score = this.score + score;
};

Bowling.prototype.bowl = function(hit) {
  this.pinsLeft = this.pinsLeft - hit;
  this.scoreUp(hit);
};