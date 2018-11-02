var Bowling = function() {
  this.score = 0;
  this.round = 1;
};

Bowling.prototype.returnScore = function() {
  return this.score;
};

Bowling.prototype.returnRound = function() {
  return this.round;
}

Bowling.prototype.bowl = function(score) {
  this.score += score;
  if(this.score === 10) { this.round += 1 }
};
