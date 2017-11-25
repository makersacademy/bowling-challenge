function Bowling() {
 this.points = []
 this.lastScore = 0
};

Bowling.prototype.throw = function(score) {
  this.lastScore = score
  return this.lastScore
};

Bowling.prototype.record = function() {
  this.points.push(this.lastScore);
};
