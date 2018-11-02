var Bowling = function() {
  this.score = 0
};

Bowling.prototype.returnScore = function() {
  return this.score
};

Bowling.prototype.bowl = function(score) {
  this.score += score
};
